import Image from "next/image";
import type { Band } from "../types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="border rounded-xl p-4 shadow-sm bg-white dark:bg-zinc-900 flex flex-col justify-between">
      <div>
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
          <Image
            src={band.image}
            alt={band.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <h2 className="text-xl font-bold text-black dark:text-white">
          {band.name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          แนวเพลง: {band.genre}
        </p>
        {band.description && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {band.description}
          </p>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-zinc-800">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          สมาชิก:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1">
          {band.members.map((member: string, index: number) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}