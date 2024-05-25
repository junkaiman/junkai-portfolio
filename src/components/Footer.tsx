import basic from "@/_contents/basic";

export default function Footer() {
  return (
    <footer className="py-8 px-7 text-xs">
      <p>&copy; {basic.startYear} - {new Date().getFullYear()} {basic.name}</p>
    </footer>
  );
}
