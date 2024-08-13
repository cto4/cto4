import Link from "next/link";

export const metadata = {
  title: "Not Found | Next App",
};

const NotFound = async () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Page may be deleted or moved to another url.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
