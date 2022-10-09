import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h2> Home Page </h2>
      <Link href="/blog">
        <a>Blog</a>
      </Link>

      <Link href='/product'>
      <a>Products</a>
      </Link>
    </div>
  );
};

export default Home;
