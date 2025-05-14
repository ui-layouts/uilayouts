"use client"


import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "@/components/website/ui/button"
import { Copy, Pipette } from "lucide-react"
import { toast } from "sonner"

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
  showEyedropper?: boolean
}

export function ColorPicker({ color, onChange, showEyedropper = true }: ColorPickerProps) {
  const [hue, setHue] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [internalColor, setInternalColor] = useState(color)
  const [hexValue, setHexValue] = useState(color)
  const [isDraggingHue, setIsDraggingHue] = useState(false)
  const [isDraggingColor, setIsDraggingColor] = useState(false)

  const colorPanelRef = useRef<HTMLDivElement>(null)
  const hueSliderRef = useRef<HTMLDivElement>(null)

  // Initialize picker state from the provided color
  useEffect(() => {
    if (color.startsWith("#")) {
      setHexValue(color)
      setInternalColor(color)
      const { h, s, v } = hexToHsv(color)
      setHue(h)

      if (colorPanelRef.current) {
        const width = colorPanelRef.current.clientWidth
        const height = colorPanelRef.current.clientHeight
        setPosition({
          x: s * width,
          y: (1 - v) * height,
        })
      }
    }
  }, [color])

  // Convert hex to HSV
  function hexToHsv(hex: string): { h: number; s: number; v: number } {
    hex = hex.replace(/^#/, "")

    const r = Number.parseInt(hex.substring(0, 2), 16) / 255
    const g = Number.parseInt(hex.substring(2, 4), 16) / 255
    const b = Number.parseInt(hex.substring(4, 6), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const delta = max - min

    let h = 0
    if (delta !== 0) {
      if (max === r) {
        h = ((g - b) / delta) % 6
      } else if (max === g) {
        h = (b - r) / delta + 2
      } else {
        h = (r - g) / delta + 4
      }

      h = Math.round(h * 60)
      if (h < 0) h += 360
    }

    const s = max === 0 ? 0 : delta / max
    const v = max

    return { h, s, v }
  }

  // Convert HSV to hex
  function hsvToHex(h: number, s: number, v: number): string {
    const hi = Math.floor(h / 60) % 6
    const f = h / 60 - Math.floor(h / 60)
    const p = v * (1 - s)
    const q = v * (1 - f * s)
    const t = v * (1 - (1 - f) * s)

    let r = 0
    let g = 0
    let b = 0

    switch (hi) {
      case 0:
        r = v
        g = t
        b = p
        break
      case 1:
        r = q
        g = v
        b = p
        break
      case 2:
        r = p
        g = v
        b = t
        break
      case 3:
        r = p
        g = q
        b = v
        break
      case 4:
        r = t
        g = p
        b = v
        break
      case 5:
        r = v
        g = p
        b = q
        break
    }

    const toHex = (c: number) => {
      const hex = Math.round(c * 255).toString(16)
      return hex.length === 1 ? `0${hex}` : hex
    }

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  // Update internal color based on position and hue
  const updateInternalColor = useCallback((x: number, y: number, h: number) => {
    if (!colorPanelRef.current) return

    const width = colorPanelRef.current.clientWidth
    const height = colorPanelRef.current.clientHeight

    // Clamp values
    const clampedX = Math.max(0, Math.min(x, width))
    const clampedY = Math.max(0, Math.min(y, height))

    // Calculate saturation and value
    const s = clampedX / width
    const v = 1 - clampedY / height

    // Update hex value
    const newHex = hsvToHex(h, s, v)
    setHexValue(newHex)
    setInternalColor(newHex)

    // Update position
    setPosition({ x: clampedX, y: clampedY })
  }, [])

  // Commit the color change to the parent component
  const commitColorChange = useCallback(() => {
    onChange(internalColor)
  }, [onChange, internalColor])

  // Handle color panel mouse/touch events
  function handleColorPanelMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    setIsDraggingColor(true)
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    updateInternalColor(x, y, hue)
  }

  // Handle hue slider mouse/touch events
  function handleHueSliderMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    setIsDraggingHue(true)
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    const h = (x / width) * 360
    setHue(h)
    updateInternalColor(position.x, position.y, h)
  }

  // Handle mouse/touch move
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (isDraggingColor && colorPanelRef.current) {
        const rect = colorPanelRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        updateInternalColor(x, y, hue)
      } else if (isDraggingHue && hueSliderRef.current) {
        const rect = hueSliderRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const width = rect.width
        const h = Math.max(0, Math.min((x / width) * 360, 360))
        setHue(h)
        updateInternalColor(position.x, position.y, h)
      }
    }

    function handleMouseUp() {
      if (isDraggingColor || isDraggingHue) {
        commitColorChange()
      }
      setIsDraggingColor(false)
      setIsDraggingHue(false)
    }

    if (isDraggingColor || isDraggingHue) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDraggingColor, isDraggingHue, hue, position.x, position.y, commitColorChange, updateInternalColor])

  // Handle hex input change
  function handleHexChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setHexValue(value)

    if (/^#[0-9A-F]{6}$/i.test(value)) {
      setInternalColor(value)
    }
  }

  // Handle hex input blur (commit change)
  function handleHexBlur() {
    if (/^#[0-9A-F]{6}$/i.test(hexValue)) {
      commitColorChange()

      // Update hue and position
      const { h, s, v } = hexToHsv(hexValue)
      setHue(h)

      if (colorPanelRef.current) {
        const width = colorPanelRef.current.clientWidth
        const height = colorPanelRef.current.clientHeight
        setPosition({
          x: s * width,
          y: (1 - v) * height,
        })
      }
    } else {
      // Reset to the last valid color
      setHexValue(internalColor)
    }
  }

  // Handle hex input key press (commit on Enter)
  function handleHexKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleHexBlur()
    }
  }

  // Copy color to clipboard
  function copyToClipboard() {
    navigator.clipboard.writeText(hexValue)
    toast("Copied!", {
      description: `${hexValue} copied to clipboard`,
      duration: 2000,
    })
  }

  // Use eyedropper if available
  async function useEyeDropper() {
    if (!("EyeDropper" in window)) {
      toast.error("Not supported", {
        description: "Eyedropper is not supported in your browser",
        duration: 3000,
      })
      return
    }

    try {
      // @ts-expect-error - EyeDropper is not in the TypeScript DOM types yet
      const eyeDropper = new window.EyeDropper()
      const result = await eyeDropper.open()
      setHexValue(result.sRGBHex)
      setInternalColor(result.sRGBHex)
      commitColorChange()

      // Update hue and position
      const { h, s, v } = hexToHsv(result.sRGBHex)
      setHue(h)

      if (colorPanelRef.current) {
        const width = colorPanelRef.current.clientWidth
        const height = colorPanelRef.current.clientHeight
        setPosition({
          x: s * width,
          y: (1 - v) * height,
        })
      }
    } catch (e) {
      console.error("Error using eyedropper", e)
    }
  }

  return (
    <div className="w-full space-y-4 rounded-lg bg-primary-foreground p-4 text-primary">
      {/* Color panel */}
      <div
        ref={colorPanelRef}
        className="relative h-48 w-full cursor-crosshair touch-none rounded-md"
        style={{
          backgroundColor: `hsl(${hue}, 100%, 50%)`,
          backgroundImage: `
          linear-gradient(to right, #fff, transparent),
          linear-gradient(to bottom, transparent, #000)
        `,
        }}
        onMouseDown={handleColorPanelMouseDown}
      >
        {/* Color selector */}
        <div
          className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute h-6 w-6 rounded-full border-2 border-white shadow-md"
          style={{
            left: position.x,
            top: position.y,
            backgroundColor: internalColor,
          }}
        />
      </div>

      {/* Hue slider */}
      <div
        ref={hueSliderRef}
        className="relative h-6 w-full cursor-pointer touch-none rounded-md"
        style={{
          backgroundImage: `linear-gradient(to right, 
          #FF0000, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF, #FF0000)`,
        }}
        onMouseDown={handleHueSliderMouseDown}
      >
        {/* Hue selector */}
        <div
          className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute h-6 w-6 rounded-full border-2 border-white shadow-md"
          style={{
            left: `${(hue / 360) * 100}%`,
            top: "50%",
            backgroundColor: `hsl(${hue}, 100%, 50%)`,
          }}
        />
      </div>

      {/* Hex input and tools */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={hexValue}
            onChange={handleHexChange}
            onBlur={handleHexBlur}
            onKeyDown={handleHexKeyDown}
            className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900"
            pattern="^#[0-9A-F]{6}$"
            maxLength={7}
          />
           <Button
            variant="outline"
            size="icon"
            onClick={copyToClipboard}
            className="h-10 w-10 border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200"
          >
            <Copy className="h-4 w-4" />
            <span className="sr-only">Copy color</span>
          </Button>
        </div>

        <div className="flex items-center gap-2">
         

          {showEyedropper && (
            <Button
              variant="outline"
              size="icon"
              onClick={useEyeDropper}
              className="h-10 w-10 border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200"
            >
              <Pipette className="h-4 w-4" />
              <span className="sr-only">Pick color</span>
            </Button>
          )}

          <div className="h-10 flex-1 rounded-md border border-gray-300" style={{ backgroundColor: internalColor }} />
        </div>
      </div>
    </div>
  )
}
function RawsColorPicker() {
    const [color,setColor] = useState("#002fff")
  return (
    <div className='flex gap-2 items-center w-96 mx-auto' >
      <ColorPicker color={color} onChange={(color) => setColor(color)}/>
    </div>
  )
}

export default RawsColorPicker
