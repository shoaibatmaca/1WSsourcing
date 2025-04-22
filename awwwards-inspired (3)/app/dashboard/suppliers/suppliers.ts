import { useEffect, useState } from "react";

// export function useSuppliers() {
//   const [suppliers, setSuppliers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:8000/suppliers/", {
//       headers: {
//         Accept: "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setSuppliers(data))
//       .catch((err) => console.error("Supplier fetch error:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   return { suppliers, loading };
// }

export function useSuppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/suppliers/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("API error: " + res.status);
        return res.json();
      })
      .then((data) => {
        console.log("✅ Supplier API response:", data); // 🔥 check this

        if (Array.isArray(data)) {
          setSuppliers(data);
        } else if (data.results) {
          // DRF pagination support
          setSuppliers(data.results);
        } else {
          console.warn("⚠️ Unexpected data structure", data);
          setSuppliers([]);
        }
      })

      .catch((err) => {
        console.error("❌ Supplier fetch error", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { suppliers, loading, error };
}
