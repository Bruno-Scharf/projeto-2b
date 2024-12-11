"use client"
import Link from "next/link"
import styles from "./Header.module.css";
import { useState } from "react";
import Image from "next/image";


export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={styles.header}>
      <nav aria-label="Menu de navegação">
      <div className={styles.logo}>
        <Image src="/public_img/liga-de-logotipo-de-volei_636967-253 (1).avif" alt="Logo da Aplicação" width={50} height={50} />
      </div>


        
        <div className={styles.menuHamburguer} onClick={toggleMenu}>
          <span className={menuAberto ? styles.open : ''}></span>
          <span className={menuAberto ? styles.open : ''}></span>
          <span className={menuAberto ? styles.open : ''}></span>
        </div>

        <ul className={`${styles.lista} ${menuAberto ? styles.ativo : ''}`}>
          <li>
            <Link href="/" aria-label="Ir para a página inicial"><h2>Inicio</h2></Link>
          </li>
          <li>
            <Link href="/sobre" aria-label="Ir para a página Sobre"><h2>Sobre</h2></Link>
          </li>
          <li>
            <Link href="/contato" aria-label="Ir para a página contato"><h2>contato</h2></Link>
          </li>
          <li>
          <Link href="/lista" aria-label="Ir para a página inicial"><h2>lista</h2></Link>
          </li>
          <li>
          <Link href="/props" aria-label="/"><h2>props</h2></Link>
          </li>
          <li>
          <Link href="/filter" aria-label="/"><h2>filter</h2></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

