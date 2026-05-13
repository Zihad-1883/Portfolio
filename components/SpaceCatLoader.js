"use client";

import React from "react";
import { motion } from "framer-motion";

// Running leg keyframes — a 4-phase gallop cycle
const legCycle = {
  // Front left leg
  frontLeftUp:   "M 90 148 L 82 165 L 76 182",
  frontLeftMid:  "M 90 148 L 80 172 L 70 190",
  frontLeftDown: "M 90 148 L 85 175 L 78 195",
  frontLeftBack: "M 90 148 L 94 170 L 98 188",

  // Front right leg
  frontRightUp:   "M 110 148 L 118 165 L 124 182",
  frontRightMid:  "M 110 148 L 120 172 L 130 190",
  frontRightDown: "M 110 148 L 115 175 L 122 195",
  frontRightBack: "M 110 148 L 106 170 L 102 188",

  // Back left leg
  backLeftUp:   "M 80 155 L 68 170 L 56 185",
  backLeftMid:  "M 80 155 L 64 172 L 50 190",
  backLeftDown: "M 80 155 L 70 178 L 60 196",
  backLeftBack: "M 80 155 L 84 172 L 86 192",

  // Back right leg
  backRightUp:   "M 120 155 L 132 170 L 144 185",
  backRightMid:  "M 120 155 L 136 172 L 150 190",
  backRightDown: "M 120 155 L 130 178 L 140 196",
  backRightBack: "M 120 155 L 116 172 L 114 192",
};

export default function SpaceCatLoader() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#020205] overflow-hidden">
      {/* Space background layers */}
      <div className="starfield" />
      <div className="nebula" />
      <div className="grain" />

      {/* Stars twinkling */}
      {[
        { x: "8%", y: "12%" }, { x: "25%", y: "7%" }, { x: "45%", y: "18%" },
        { x: "68%", y: "5%" }, { x: "82%", y: "22%" }, { x: "92%", y: "10%" },
        { x: "15%", y: "85%" }, { x: "35%", y: "90%" }, { x: "60%", y: "78%" },
        { x: "78%", y: "88%" }, { x: "90%", y: "75%" }, { x: "5%", y: "55%" },
        { x: "95%", y: "60%" }, { x: "50%", y: "92%" }, { x: "72%", y: "42%" },
      ].map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: star.x, top: star.y, width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2 }}
          animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + (i * 0.37), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Ground / planet surface line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Ground glow */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a1a] to-transparent" />

      {/* Running surface dots (simulates ground parallax) */}
      {[0,1,2,3,4,5,6,7].map((i) => (
        <motion.div
          key={"dot" + i}
          className="absolute bottom-6 rounded-full bg-white/10"
          style={{ width: 4, height: 2, bottom: 20 }}
          initial={{ left: `${(i * 13) + 3}%` }}
          animate={{ left: [`${(i * 13) + 3}%`, `${((i * 13) + 3 - 110)}%`] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.31 }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
        style={{ marginTop: "-40px" }}
      >
        {/* ──────── CAT SVG ──────── */}
        <motion.div
          animate={{ y: [0, -6, 0, -3, 0] }}
          transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 240 220"
            width="320"
            height="288"
            style={{ overflow: "visible" }}
          >

            {/* ─── TAIL (curves UP when galloping) ─── */}
            <motion.path
              stroke="#c8861a"
              strokeWidth="9"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: [
                  "M 62 148 Q 30 130 18 100 Q 12 70 30 58",
                  "M 62 148 Q 28 125 14 90 Q 6 55 28 45",
                  "M 62 148 Q 32 128 20 95 Q 12 60 35 52",
                  "M 62 148 Q 30 130 18 100 Q 12 70 30 58",
                ]
              }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Tail tip (white with orange ring) */}
            <motion.circle
              r="6" fill="white" stroke="#c8861a" strokeWidth="2"
              animate={{
                cx: [30, 28, 35, 30],
                cy: [58, 45, 52, 58],
              }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* ─── BACK LEGS ─── */}
            {/* Back left leg */}
            <motion.path
              stroke="#2d2d2d" strokeWidth="11" strokeLinecap="round" fill="none"
              animate={{
                d: [
                  legCycle.backLeftUp,
                  legCycle.backLeftMid,
                  legCycle.backLeftDown,
                  legCycle.backLeftBack,
                  legCycle.backLeftUp,
                ]
              }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
            />
            {/* Back left paw */}
            <motion.ellipse rx="10" ry="5" fill="#2d2d2d"
              animate={{
                cx: [56, 50, 60, 86],
                cy: [185, 190, 196, 192],
              }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
            />

            {/* Back right leg */}
            <motion.path
              stroke="#d4a520" strokeWidth="11" strokeLinecap="round" fill="none"
              animate={{
                d: [
                  legCycle.backRightDown,
                  legCycle.backRightBack,
                  legCycle.backRightUp,
                  legCycle.backRightMid,
                  legCycle.backRightDown,
                ]
              }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
            />
            {/* Back right paw */}
            <motion.ellipse rx="10" ry="5" fill="#d4a520"
              animate={{
                cx: [140, 114, 144, 150],
                cy: [196, 192, 185, 190],
              }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
            />

            {/* ─── BODY ─── */}
            {/* Main body shape — elongated oval for running posture */}
            <ellipse cx="120" cy="148" rx="62" ry="38" fill="white" />

            {/* Calico patch — orange upper right */}
            <path
              d="M 120 110 A 62 38 0 0 1 182 148 L 150 148 Q 148 125 120 115 Z"
              fill="#e8941a"
            />
            {/* Calico patch — dark/charcoal lower left */}
            <path
              d="M 60 155 A 62 38 0 0 0 100 183 L 100 158 Q 80 162 68 155 Z"
              fill="#2d2d2d"
            />
            {/* Extra patch — ginger spot on back */}
            <ellipse cx="155" cy="138" rx="18" ry="14" fill="#e8941a" opacity="0.7" />
            {/* Extra patch — black spot on belly side */}
            <ellipse cx="78" cy="162" rx="14" ry="9" fill="#2d2d2d" opacity="0.6" />

            {/* ─── FRONT LEGS ─── */}
            {/* Front left leg */}
            <motion.path
              stroke="white" strokeWidth="13" strokeLinecap="round" fill="none"
              animate={{
                d: [
                  legCycle.frontLeftDown,
                  legCycle.frontLeftBack,
                  legCycle.frontLeftUp,
                  legCycle.frontLeftMid,
                  legCycle.frontLeftDown,
                ]
              }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
            />
            {/* Front left paw */}
            <motion.ellipse rx="10" ry="5" fill="#ececec"
              animate={{
                cx: [78, 98, 76, 70],
                cy: [195, 188, 182, 190],
              }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
            />

            {/* Front right leg */}
            <motion.path
              stroke="#e8941a" strokeWidth="13" strokeLinecap="round" fill="none"
              animate={{
                d: [
                  legCycle.frontRightUp,
                  legCycle.frontRightMid,
                  legCycle.frontRightDown,
                  legCycle.frontRightBack,
                  legCycle.frontRightUp,
                ]
              }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
            />
            {/* Front right paw */}
            <motion.ellipse rx="10" ry="5" fill="#e8941a"
              animate={{
                cx: [124, 130, 122, 102],
                cy: [182, 190, 195, 188],
              }}
              transition={{ duration: 0.55, repeat: Infinity, ease: "linear" }}
            />

            {/* ─── HEAD ─── */}
            {/* Head — wide and round, very catlike */}
            <g>
              {/* Head base — broad, flat-topped */}
              <ellipse cx="148" cy="84" rx="44" ry="40" fill="white" />

              {/* HEAD CALICO PATCHES */}
              {/* Orange forehead patch */}
              <path
                d="M 148 44 Q 180 44 192 70 Q 185 58 165 56 Q 155 50 148 44 Z"
                fill="#e8941a"
              />
              {/* Dark patch on cheek/left eye area */}
              <path
                d="M 108 72 Q 118 58 132 62 Q 125 72 120 82 Q 113 80 108 72 Z"
                fill="#2d2d2d"
              />
              {/* Orange patch lower right */}
              <ellipse cx="170" cy="100" rx="16" ry="12" fill="#e8941a" opacity="0.75" />

              {/* ─── PROMINENT CAT EARS ─── */}
              {/* Left ear (charcoal — part of dark patch) */}
              <path d="M 118 52 L 108 16 L 138 44 Z" fill="#2d2d2d" />
              {/* Left ear inner */}
              <path d="M 120 48 L 114 24 L 132 42 Z" fill="#7a3828" />

              {/* Right ear (orange/ginger) */}
              <path d="M 165 48 L 172 12 L 192 46 Z" fill="#e8941a" />
              {/* Right ear inner */}
              <path d="M 167 46 L 173 20 L 188 44 Z" fill="#c86820" />

              {/* ─── NO EYES — EMPTY FACE ─── */}

              {/* ─── NOSE ─── */}
              {/* Triangular cat nose — very prominent */}
              <path d="M 145 88 L 151 88 L 148 93 Z" fill="#e07090" />
              {/* Nose highlight */}
              <ellipse cx="147" cy="89" rx="1.5" ry="1" fill="white" opacity="0.5" />

              {/* ─── MOUTH (Y-shape) ─── */}
              <path d="M 148 93 L 148 96" stroke="#b05878" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M 148 96 Q 143 101 140 99" stroke="#b05878" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M 148 96 Q 153 101 156 99" stroke="#b05878" strokeWidth="1.5" fill="none" strokeLinecap="round" />

              {/* ─── WHISKERS ─── */}
              {/* Left whiskers — 3 long ones */}
              <g stroke="white" strokeWidth="0.8" opacity="0.6">
                <line x1="140" y1="90" x2="100" y2="84" />
                <line x1="140" y1="93" x2="98" y2="93" />
                <line x1="140" y1="96" x2="102" y2="100" />
              </g>
              {/* Right whiskers */}
              <g stroke="white" strokeWidth="0.8" opacity="0.6">
                <line x1="156" y1="90" x2="196" y2="84" />
                <line x1="156" y1="93" x2="198" y2="93" />
                <line x1="156" y1="96" x2="194" y2="100" />
              </g>

              {/* Cheek fur tufts */}
              <path d="M 108 95 Q 104 90 106 84" stroke="white" strokeWidth="0.7" fill="none" opacity="0.4" />
              <path d="M 107 98 Q 101 95 102 88" stroke="white" strokeWidth="0.7" fill="none" opacity="0.4" />

              {/* ─── SPACE HELMET ─── */}
              {/* Outer visor ring */}
              <circle
                cx="148" cy="82" r="50"
                fill="rgba(148,200,255,0.04)"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1.2"
              />
              {/* Inner visor — subtle blue tint */}
              <circle
                cx="148" cy="80" r="44"
                fill="rgba(56,189,248,0.04)"
                stroke="rgba(56,189,248,0.15)"
                strokeWidth="0.5"
              />
              {/* Helmet glare / reflection — top left arc */}
              <path
                d="M 120 50 Q 145 36 170 50"
                fill="none" stroke="white" strokeWidth="2.5"
                strokeLinecap="round" opacity="0.18"
              />
              {/* Small glare dot */}
              <circle cx="125" cy="55" r="4" fill="white" opacity="0.1" />
              {/* Helmet bottom seal ring */}
              <path
                d="M 106 124 Q 148 132 190 124"
                fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"
              />
              {/* Oxygen tube — left side */}
              <path
                d="M 104 110 Q 92 118 94 130"
                fill="none" stroke="#475569" strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="94" cy="133" r="4" fill="#334155" stroke="#94a3b8" strokeWidth="0.5" />

              {/* ─── ANTENNA ─── */}
              <line x1="148" y1="32" x2="160" y2="4" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
              {/* Antenna ball — glowing beacon */}
              <motion.circle
                cx="160" cy="4" r="5"
                fill="#38bdf8"
                animate={{
                  fill: ["#38bdf8", "#ffffff", "#a78bfa", "#38bdf8"],
                  scale: [1, 1.4, 1.1, 1],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Pulse ring 1 */}
              <motion.circle
                cx="160" cy="4" r="9"
                fill="none" stroke="#38bdf8" strokeWidth="1"
                animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              {/* Pulse ring 2 */}
              <motion.circle
                cx="160" cy="4" r="9"
                fill="none" stroke="#a78bfa" strokeWidth="0.5"
                animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
              />

              {/* ─── SPACE PACK / SUIT DETAIL ─── */}
              {/* Collar ring at neck */}
              <path
                d="M 112 118 Q 148 128 184 118"
                fill="none" stroke="#334155" strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Centre chest badge */}
              <rect x="140" y="120" width="16" height="10" rx="2" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="0.5" />
              <circle cx="148" cy="125" r="2" fill="#38bdf8" opacity="0.8" />
            </g>

          </svg>
        </motion.div>

        {/* ──────── LOADING TEXT ──────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col items-center gap-4 mt-4"
        >
          <div className="flex flex-col items-center">
            <span
              className="section-label text-white/35 tracking-[0.65em] mb-2"
              style={{ fontFamily: "var(--font-dm)", fontSize: "0.6rem", letterSpacing: "0.5em", textTransform: "uppercase" }}
            >
              Initiating Launch Sequence
            </span>
            <span
              style={{ fontFamily: "var(--font-syne)", fontSize: "1.1rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}
              className="text-white"
            >
              Space Cat{" "}
              <span className="text-[#38bdf8]">Online</span>
            </span>
          </div>

          {/* Animated progress bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#38bdf8] rounded-full"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "60%" }}
            />
          </div>

          {/* Dots */}
          <div className="flex gap-3 mt-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"
                style={{ boxShadow: "0 0 8px rgba(56,189,248,0.6)" }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
