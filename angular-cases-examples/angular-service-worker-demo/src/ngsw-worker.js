self.addEventListener("fetch", (event) => {
  if (
    event.request.method === "POST" &&
    event.request.url.includes("/api/submit-form")
  ) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(
          JSON.stringify({ message: "Form submission saved offline" }),
          { headers: { "Content-Type": "application/json" } }
        );
      })
    );
  }
});
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-form-requests") {
    event.waitUntil(syncFormRequests());
  }
});

async function syncFormRequests() {
  const allRequests = await getIndexedDBRequests(); // Custom method to retrieve requests from IndexedDB
  for (const request of allRequests) {
    await fetch(request);
  }
}

async function getIndexedDBRequests() {
  // Custom logic to retrieve requests from IndexedDB
  return [];
}
