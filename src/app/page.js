"use client"

import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>pagina Inicio</h1>
      <Image className={styles.img} src="/public_img/Campus_Vilhena_-_Imagens_2023_1.jpg" alt="img do ifro" width={400} height={400} />
      
    </div>
  );
}
