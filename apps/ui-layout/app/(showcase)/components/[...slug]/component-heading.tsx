import styles from './showcase.module.css';

const diamond = 'M9.19671 6.83999C9.33456 7.11818 9.59244 7.37605 10.1082 7.89181C10.6239 8.40756 10.8818 8.66544 11.16 8.80329C11.6893 9.06557 12.3107 9.06557 12.84 8.80329C13.1182 8.66544 13.3761 8.40756 13.8918 7.89181C14.4076 7.37605 14.6654 7.11818 14.8033 6.83999C15.0656 6.31071 15.0656 5.68929 14.8033 5.16001C14.6654 4.88182 14.4076 4.62395 13.8918 4.10819C13.3761 3.59244 13.1182 3.33456 12.84 3.19671C12.3107 2.93443 11.6893 2.93443 11.16 3.19671C10.8818 3.33456 10.6239 3.59244 10.1082 4.10819C9.59244 4.62395 9.33456 4.88182 9.19671 5.16001C8.93443 5.68929 8.93443 6.31071 9.19671 6.83999Z';

export default function ComponentHeading({ title }: { title: string }) {
  return (
    <h1 id="component-title" className={styles.componentHeading}>
      <span className={styles.headingTile} aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
          <path d={diamond} />
          <path d={diamond} transform="translate(-6 6)" />
          <path d={diamond} transform="translate(6 6)" />
          <path d={diamond} transform="translate(0 12)" />
        </svg>
      </span>
      <span>{title}</span>
    </h1>
  );
}
