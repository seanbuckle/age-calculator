import * as esbuild from "npm:esbuild";

// Define your entry and output paths
const entry = new URL("../script/script.ts", import.meta.url).pathname;
const out = new URL("../script/script.min.js", import.meta.url).pathname;

async function watchTS() {
    console.log("Starting esbuild watcher for TypeScript changes...");

    const ctx = await esbuild.context({
        entryPoints: [entry],
        bundle: true,
        outfile: out,
        minify: true,
        sourcemap: true,
        platform: "browser",
        target: ["es2024"],
    });

    await ctx.watch();

    console.log(
        "esbuild is now watching your TypeScript files. Press Ctrl+C to stop."
    );
}

if (import.meta.main) {
    await watchTS();
}
