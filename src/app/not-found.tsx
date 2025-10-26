import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div>
        <h2>This is not the page you are looking for...</h2>
        <img
          width="auto"
          height={500}
          alt="notFound"
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXp6YWcwN3drbjJzc2V3aGtuczhraWIxdTB2dWp1MHAzd3F0cGNhdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JJKs3I69qfaQleE/giphy.gif"
        />
        <div className="flex flex-1 justify-center mt-4">
          <Link className="flex items-center gap-2 text-sw-saber-blue" href="/">
            <ArrowBigLeftDash />
            Back to Hyperspace
          </Link>
        </div>
      </div>
    </div>
  );
}
