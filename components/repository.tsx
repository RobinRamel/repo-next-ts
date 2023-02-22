import Link from "next/link";
import styles from "@/styles/components/displayCards.module.scss"

type Props = {
    description: string;
    name: string;
    url: string;
}

function Repository({ description, name, url }: Props) {
  return (
    <Link href={url} className={styles.repository}>
        <div className={styles.repository__container}>
            <span className={styles.title}> { name } </span>
            <span className={styles.desc}> { description } </span>
        </div>
    </Link>
  );
}


export default Repository;
