import { serve } from "https://deno.land/std@0.75.0/http/server.ts";

const server = serve({ hostname: "0.0.0.0", port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

for await (const request of server) {
    const index = Deno.readTextFile("./index.html");
//   let bodyContent = "Your user-agent is:\n\n";
//   bodyContent += request.headers.get("user-agent") || "Unknown";
    index.then((response:any) => request.respond({
        status:200,
        body:response
    }));    
}
