import MillionLint from "@million/lint";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default MillionLint.next({ rsc: true })(nextConfig);
