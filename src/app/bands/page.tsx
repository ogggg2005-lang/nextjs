import BandCard from "../../components/BandCard";
import { favoriteBands } from "../../data/bands";

export default function BandsPage() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Favorite Bands
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          วงดนตรีและศิลปินที่ชื่นชอบ
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteBands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}