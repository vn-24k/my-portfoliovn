import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { profile, projects } from "./data";

describe("Portfólio de Vinícius Silva", () => {
  it("apresenta título único, navegação e todas as seções", () => {
    render(<App />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getByRole("navigation", { name: "Navegação principal" }),
    ).toBeInTheDocument();
    for (const id of [
      "inicio",
      "sobre",
      "projetos",
      "habilidades",
      "contato",
    ]) {
      expect(document.getElementById(id)).toHaveAttribute("tabindex", "-1");
    }
    expect(
      screen.getByRole("link", { name: "Pular para o conteúdo" }),
    ).toHaveAttribute("href", "#conteudo");
  });

  it("filtra projetos e permite restaurar a lista", async () => {
    const user = userEvent.setup();
    render(<App />);
    const section = document.getElementById("projetos");
    expect(within(section).getAllByRole("article")).toHaveLength(4);
    await user.click(
      screen.getByRole("button", { name: "Desenvolvimento web" }),
    );
    expect(within(section).getAllByRole("article")).toHaveLength(1);
    expect(
      screen.getByRole("heading", { name: "Editor de Código Cloud" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("1 projeto exibido");
    await user.click(
      screen.getByRole("button", { name: "Inteligência artificial" }),
    );
    expect(within(section).getAllByRole("article")).toHaveLength(3);
    await user.click(screen.getByRole("button", { name: /Todos/ }));
    expect(within(section).getAllByRole("article")).toHaveLength(
      projects.length,
    );
  });

  it("abre e fecha o menu com Escape, restaurando foco e rolagem", async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByRole("button", { name: "Abrir menu" });
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(document.body.style.overflow).toBe("hidden");
    await user.keyboard("{Escape}");
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveFocus();
    expect(document.body.style.overflow).toBe("");
  });

  it("fecha o menu ao navegar e move o foco para a seção", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    await user.click(screen.getByRole("link", { name: "Sobre", exact: true }));
    expect(screen.getByRole("button", { name: "Abrir menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(document.getElementById("sobre")).toHaveFocus();
  });

  it("mantém o foco dentro do menu aberto", async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByRole("button", { name: "Abrir menu" });
    await user.click(button);
    await user.tab({ shift: true });
    const last = within(screen.getByRole("navigation")).getByRole("link", {
      name: /Vamos conversar/,
    });
    expect(last).toHaveFocus();
    await user.tab();
    expect(button).toHaveFocus();
  });

  it("não publica dados de terceiros, downloads quebrados ou formulário sem envio", () => {
    render(<App />);
    expect(document.querySelector("form")).not.toBeInTheDocument();
    expect(document.querySelector("a[download]")).not.toBeInTheDocument();
    const external = screen
      .getAllByRole("link")
      .filter((link) => link.href.startsWith("https:"));
    for (const link of external) {
      expect([profile.github, profile.linkedin]).toContain(
        link.getAttribute("href"),
      );
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link).toHaveAccessibleName();
    }
    expect(screen.getAllByText("Demo pública não disponível")).toHaveLength(4);
  });

  it("todos os links internos apontam para elementos existentes", () => {
    render(<App />);
    for (const link of document.querySelectorAll('a[href^="#"]')) {
      expect(document.querySelector(link.getAttribute("href"))).not.toBeNull();
    }
  });
});
