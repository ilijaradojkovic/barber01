export default function FooterSection() {
  return (
    <footer className="bg-primary-100 h-[5vh] text-white flex justify-center items-center">
      <div className="container mx-auto text-center">
        <p className="text-sm text-black">
          &copy; {new Date().getFullYear()} Moja Firma. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
