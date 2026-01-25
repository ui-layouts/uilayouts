'use client';

import { useState } from 'react';
import {
  TreeProvider,
  TreeView,
  TreeNode,
  TreeNodeTrigger,
  TreeNodeContent,
  TreeExpander,
  TreeIcon,
  TreeLabel,
} from '@/components/website/ui/tree';
import { ClientPreCode } from './client-pre-code';
import {
  buildSimpleTree,
  getFileIcon,
  TreeNodeData,
} from '@/lib/tree-structure';

export function TreeCodeViewer({
  files,
}: {
  files: {
    id: string;
    fileName: string;
    virtualPath: string[];
    ext: string;
    raw: string;
    html: string;
  }[];
}) {
  const tree = buildSimpleTree(files);
  console.log('tree', tree);
  const [selectedId, setSelectedId] = useState(files[0]?.id);
  const fileMap = Object.fromEntries(files.map((f) => [f.id, f]));
  const selectedFile = selectedId ? fileMap[selectedId] : null;

  return (
    <div className='grid grid-cols-[250px_1fr] border dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 overflow-hidden'>
      {/* LEFT */}
      <TreeProvider
        selectable
        multiSelect={false}
        defaultExpandedIds={[tree[0].name, 'ui', 'lib']}
        onSelectionChange={(ids) => {
          if (ids[0]) setSelectedId(ids[0]);
        }}
        className='border-r dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900'
      >
        <TreeView>
          <RenderTree nodes={tree} />
        </TreeView>
      </TreeProvider>

      {/* RIGHT */}
      <div className='min-w-0 p-2'>
        {selectedFile ? (
          <ClientPreCode html={selectedFile.html} raw={selectedFile.raw} />
        ) : (
          <div className='p-6 text-sm text-muted-foreground'>Select a file</div>
        )}
      </div>
    </div>
  );
}

function RenderTree({
  nodes,
  level = 0,
}: {
  nodes: TreeNodeData[];
  level?: number;
}) {
  return (
    <>
      {nodes.map((node, index) => {
        const isLast = index === nodes.length - 1;

        // 📁 FOLDER
        if (node.type === 'folder') {
          return (
            <TreeNode
              key={node.name}
              nodeId={node.name}
              level={level}
              isLast={isLast}
              isFolder
            >
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon icon={getFileIcon('folder')} />
                <TreeLabel>{node.name}</TreeLabel>
              </TreeNodeTrigger>

              <TreeNodeContent hasChildren>
                <RenderTree nodes={node.children} level={level + 1} />
              </TreeNodeContent>
            </TreeNode>
          );
        }

        // 📄 FILE
        return (
          <TreeNode
            key={node.id}
            nodeId={node.id}
            level={level}
            isLast={isLast}
          >
            <TreeNodeTrigger>
              <TreeExpander />
              <TreeIcon icon={getFileIcon('file', node.ext, node.name)} />
              <TreeLabel>{node.name}</TreeLabel>
            </TreeNodeTrigger>
          </TreeNode>
        );
      })}
    </>
  );
}
