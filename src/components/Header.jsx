import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  ["sobre", "Sobre"],
  ["projetos", "Projetos"],
  ["habilidades", "Habilidades"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const navigation = useRef(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          toggle.current,
          ...navigation.current.querySelectorAll("a"),
        ];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    const resize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    document.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [open]);

  function navigate(event) {
    setOpen(false);
    const section = document.querySelector(event.currentTarget.hash);
    // Native hash navigation performs scrolling; focus follows to the destination.
    section?.focus({ preventScroll: true });
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#inicio"
          className="brand"
          aria-label="Vinícius Silva — início"
        >
          vs<span>.</span>
          <span className="brand-caption">VINÍCIUS SILVA</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <nav
          ref={navigation}
          id="navigation"
          aria-label="Navegação principal"
          className={open ? "navigation is-open" : "navigation"}
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={navigate}>
              {label}
            </a>
          ))}
          <a href="#contato" className="nav-contact" onClick={navigate}>
            Vamos conversar <FiArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  );
}
