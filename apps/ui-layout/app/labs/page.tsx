import ComponentSection from '@/components/website/labs/component-section';
import styles from './labs.module.css';

export default function LabsPage() {
  return (
    <main
      className={`${styles.page} fixed inset-0 h-dvh overflow-hidden bg-neutral-100 dark:bg-black`}
    >
      <ComponentSection />
    </main>
  );
}
