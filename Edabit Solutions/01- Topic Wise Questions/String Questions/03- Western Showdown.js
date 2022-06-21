//  https://edabit.com/challenge/9N7zA5oiu6v5nhuBm

/*
❓❓❓❓ Western Showdown ❓❓❓❓ 

Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

👨🏽‍💻👨🏽‍💻👨🏽‍💻👨🏽‍💻 Examples:
showdown(
  "   Bang!        ",
  "        Bang!   "
) ➞ 

 // "p1"// p1 draws his gun sooner than p2

showdown(
  "               Bang! ",
  "             Bang!   "
) ➞ 

 // "p2"showdown(
  "     Bang!   ",
  "     Bang!   "
) ➞ "tie"


📝 Notes:
Both strings are the same length.
*/

// My Sol-01:
function showdown(p1, p2) {
  return p1.indexOf("B") === p2.indexOf("B")
    ? "tie"
    : p1.indexOf("B") > p2.indexOf("B")
    ? "p2"
    : "p1";
}

console.log(showdown("   Bang!        ", "        Bang!   ")); // "p1"
console.log(showdown("               Bang! ", "             Bang!   ")); // "p2"
console.log(showdown("  Bang!   ", "Bang!     ")); // "p2"
console.log(showdown("     Bang!   ", "     Bang!   ")); // "tie"
console.log(showdown("  Bang!     ", "     Bang!  ")); // "p1"
console.log(showdown(" Bang!  ", "  Bang! ")); // "p1"
console.log(showdown("          Bang!       ", "       Bang!          ")); // "p2"
console.log(showdown("    Bang!    ", "    Bang!    ")); // "tie"
console.log(showdown("       Bang!       ", "       Bang!       ")); // "tie"
console.log(showdown(" Bang!      ", "      Bang! ")); // "p1"
console.log(showdown(" Bang!  ", "  Bang! ")); // "p1"
console.log(showdown("       Bang!      ", "      Bang!       ")); // "p2"
console.log(showdown("         Bang!    ", "    Bang!         ")); // "p2"
console.log(showdown("   Bang!        ", "        Bang!   ")); // "p1"
console.log(showdown("      Bang! ", " Bang!      ")); // "p2"
console.log(showdown("  Bang!          ", "          Bang!  ")); // "p1"
console.log(showdown("        Bang!    ", "    Bang!        ")); // "p2"
console.log(showdown("     Bang!     ", "     Bang!     ")); // "tie"
console.log(showdown("       Bang!   ", "   Bang!       ")); // "p2"
console.log(showdown("  Bang! ", " Bang!  ")); // "p2"
console.log(showdown(" Bang!      ", "      Bang! ")); // "p1"
console.log(showdown("  Bang!      ", "      Bang!  ")); // "p1"
console.log(showdown(" Bang!       ", "       Bang! ")); // "p1"
console.log(showdown("    Bang!  ", "  Bang!    ")); // "p2"
console.log(showdown("      Bang!        ", "        Bang!      ")); // "p1"
console.log(showdown("          Bang!      ", "      Bang!          ")); // "p2"
console.log(showdown("       Bang!        ", "        Bang!       ")); // "p1"
console.log(showdown("         Bang! ", " Bang!         ")); // "p2"
console.log(showdown(" Bang!   ", "   Bang! ")); // "p1"
console.log(showdown("  Bang!  ", "  Bang!  ")); // "tie"
console.log(showdown("      Bang!          ", "          Bang!      ")); // "p1"
console.log(showdown("      Bang!      ", "      Bang!      ")); // "tie"
console.log(showdown("         Bang!         ", "         Bang!         ")); // "tie"
console.log(showdown("       Bang! ", " Bang!       ")); // "p2"
console.log(showdown(" Bang!    ", "    Bang! ")); // "p1"
console.log(showdown("     Bang!   ", "   Bang!     ")); // "p2"
console.log(showdown("   Bang!       ", "       Bang!   ")); // "p1"
console.log(showdown("    Bang!       ", "       Bang!    ")); // "p1"
console.log(showdown("         Bang!         ", "         Bang!         ")); // "tie"
console.log(showdown("   Bang!      ", "      Bang!   ")); // "p1"
console.log(showdown("   Bang!   ", "   Bang!   ")); // "tie"
console.log(showdown("       Bang!    ", "    Bang!       ")); // "p2"
console.log(showdown("  Bang!     ", "     Bang!  ")); // "p1"
console.log(showdown("     Bang!  ", "  Bang!     ")); // "p2"
console.log(showdown("   Bang! ", " Bang!   ")); // "p2"
console.log(showdown("    Bang!   ", "   Bang!    ")); // "p2"
console.log(showdown(" Bang! ", " Bang! ")); // "tie"
console.log(showdown("       Bang!   ", "   Bang!       ")); // "p2"
console.log(showdown("  Bang! ", " Bang!  ")); // "p2"
console.log(showdown("        Bang!  ", "  Bang!        ")); // "p2"
console.log(showdown("   Bang!   ", "   Bang!   ")); // "tie"
console.log(showdown("       Bang! ", " Bang!       ")); // "p2"
console.log(showdown("    Bang!        ", "        Bang!    ")); // "p1"
console.log(showdown("  Bang!         ", "         Bang!  ")); // "p1"
console.log(showdown("     Bang!     ", "     Bang!     ")); // "tie"
console.log(showdown("         Bang!    ", "    Bang!         ")); // "p2"
console.log(showdown("         Bang!         ", "         Bang!         ")); // "tie"
console.log(showdown("  Bang!    ", "    Bang!  ")); // "p1"
console.log(showdown("  Bang!        ", "        Bang!  ")); // "p1"
console.log(showdown("     Bang!       ", "       Bang!     ")); // "p1"
console.log(showdown("    Bang!       ", "       Bang!    ")); // "p1"
console.log(showdown("        Bang!        ", "        Bang!        ")); // "tie"
console.log(showdown("          Bang!   ", "   Bang!          ")); // "p2"
console.log(showdown("  Bang!      ", "      Bang!  ")); // "p1"
console.log(showdown("  Bang!    ", "    Bang!  ")); // "p1"
console.log(showdown("    Bang!       ", "       Bang!    ")); // "p1"
console.log(showdown("       Bang! ", " Bang!       ")); // "p2"
console.log(showdown("  Bang!        ", "        Bang!  ")); // "p1"
console.log(showdown("         Bang!          ", "          Bang!         ")); // "p1"
console.log(showdown("         Bang!    ", "    Bang!         ")); // "p2"
console.log(showdown("     Bang!  ", "  Bang!     ")); // "p2"
console.log(showdown("       Bang!      ", "      Bang!       ")); // "p2"
console.log(showdown("    Bang!          ", "          Bang!    ")); // "p1"
console.log(showdown("         Bang!   ", "   Bang!         ")); // "p2"
console.log(showdown("    Bang!        ", "        Bang!    ")); // "p1"
console.log(showdown("      Bang!  ", "  Bang!      ")); // "p2"
console.log(showdown("       Bang!          ", "          Bang!       ")); // "p1"
console.log(showdown("    Bang!          ", "          Bang!    ")); // "p1"
console.log(showdown("      Bang!      ", "      Bang!      ")); // "tie"
console.log(showdown("     Bang!        ", "        Bang!     ")); // "p1"
console.log(showdown("     Bang!         ", "         Bang!     ")); // "p1"
console.log(showdown("    Bang!         ", "         Bang!    ")); // "p1"
console.log(showdown(" Bang!          ", "          Bang! ")); // "p1"
console.log(showdown("       Bang!  ", "  Bang!       ")); // "p2"
console.log(showdown("        Bang!     ", "     Bang!        ")); // "p2"
console.log(showdown("          Bang!      ", "      Bang!          ")); // "p2"
console.log(showdown("    Bang!         ", "         Bang!    ")); // "p1"
console.log(showdown("       Bang!         ", "         Bang!       ")); // "p1"
console.log(showdown("   Bang!     ", "     Bang!   ")); // "p1"
console.log(showdown("  Bang!  ", "  Bang!  ")); // "tie"
console.log(showdown("    Bang!         ", "         Bang!    ")); // "p1"
console.log(showdown("     Bang!         ", "         Bang!     ")); // "p1"
console.log(showdown("     Bang!      ", "      Bang!     ")); // "p1"
console.log(showdown("          Bang!  ", "  Bang!          ")); // "p2"
console.log(showdown("     Bang!   ", "   Bang!     ")); // "p2"
console.log(showdown(" Bang!    ", "    Bang! ")); // "p1"
console.log(showdown(" Bang!   ", "   Bang! ")); // "p1"
console.log(showdown("   Bang!          ", "          Bang!   ")); // "p1"
console.log(showdown("    Bang!    ", "    Bang!    ")); // "tie"
console.log(showdown("    Bang!    ", "    Bang!    ")); // "tie"
console.log(showdown("        Bang!  ", "  Bang!        ")); // "p2"
console.log(showdown("         Bang!       ", "       Bang!         ")); // "p2"
console.log(showdown("       Bang!   ", "   Bang!       ")); // "p2"
console.log(showdown("   Bang!   ", "   Bang!   ")); // "tie"
