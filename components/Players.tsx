"use client";

import React, { useState } from "react";
import Player from "./Player";
import { Profile } from ".";
import { useDisclosure } from "@nextui-org/react";
import { t1Players, t2Players, t3Players, t4Players, t5Players, } from "@/constants/players";

const Players = ({ players }: any) => {
  const [profile, setProfile] = useState<any>({
    username: "",
    rank: "",
    region: "",
    reason: "",
  });
  const [view, setView] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full flex justify-center gap-0">
      {players.map((v: any) => (
        <div
          className="w-[280px] min-h-screen border-x-[3px] border-zinc-800"
          key={v.header}
        >
          <div className="w-full h-[80px] flex items-center justify-center bg-zinc-950/50">
            <strong className="text-2xl font-p">{v.header}</strong>
          </div>
          <div className="w-full pt-4">
            {v.players.map((user: any) => (
              <div
                onClick={() => {
                  setProfile({
                    username: user.name,
                    region: user.region,
                    reason: user.reason,
                    rank: user.rank,
                  });
                  setView(true);
                  onOpen();
                }}
              >
                <Player
                  name={user.name}
                  rank={user.rank}
                  region={user.region}
                  reason={user.reason}
                />
              </div>
            ))}
            {
                view && (
                    <Profile
                      isOpen={isOpen}
                      onOpenChange={onOpenChange}
                      name={profile.username}
                      region={profile.region}
                      tier={`${
                        t1Players.find((player) =>
                          player.players.some((v) => v.name === profile.username)
                        )
                          ? "Tier 1"
                          : t2Players.find((player) =>
                              player.players.some((v) => v.name === profile.username)
                            )
                          ? "Tier 2"
                          : t3Players.find((player) =>
                              player.players.some((v) => v.name === profile.username)
                            )
                          ? "Tier 3"
                          : t4Players.find((player) =>
                              player.players.some((v) => v.name === profile.username)
                            )
                          ? "Tier 4"
                          : t5Players.find((player) =>
                              player.players.some((v) => v.name === profile.username)
                            )
                          ? "Tier 5"
                          : "null"
                      }`}
                      rank={profile.rank}
                      setView={(a: boolean) => setView(a)}
                    />
                    )
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
