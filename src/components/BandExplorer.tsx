"use client";

import { useState, type ChangeEvent } from "react";
import type { Band } from "@/types/band";
import BandCard from "./BandCard";

type BandExplorerProps = {
  bands: Band[];
};

export default function BandExplorer({ bands }: BandExplorerProps) {
  const [keyword, setKeyword] = useState("");
  const [followedBandIds, setFollowedBandIds] = useState<Set<number>>(
    new Set(),
  );
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({});
  const searchText = keyword.trim().toLowerCase();
  const visibleBands = bands.filter((band) =>
    band.name.toLowerCase().includes(searchText),
  );

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleToggleFollow(bandId: number) {
    setFollowedBandIds((currentIds) => {
      const nextIds = new Set(currentIds);

      if (nextIds.has(bandId)) {
        nextIds.delete(bandId);
      } else {
        nextIds.add(bandId);
      }

      return nextIds;
    });
  }

  function handleLike(bandId: number) {
    setLikeCounts((currentCounts) => ({
      ...currentCounts,
      [bandId]: (currentCounts[bandId] ?? 0) + 1,
    }));
  }

  return (
    <div className="space-y-6">
      <input
        type="search"
        aria-label="ค้นหาวงดนตรี"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="ค้นหาชื่อวงดนตรี"
        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
      />

      <p className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
        ติดตามอยู่ {followedBandIds.size} วง
      </p>

      {visibleBands.length > 0 ? (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowing={followedBandIds.has(band.id)}
              likeCount={likeCounts[band.id] ?? 0}
              onToggleFollow={handleToggleFollow}
              onLike={handleLike}
            />
          ))}
        </section>
      ) : (
        <p className="py-8 text-center text-zinc-600 dark:text-zinc-400">
          ไม่พบวงดนตรีที่ค้นหา
        </p>
      )}
    </div>
  );
}
