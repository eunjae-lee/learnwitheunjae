import { json } from "@sveltejs/kit";
import { parseString } from "@fast-csv/parse";

// source: https://diviengine.com/woocommerce-sample-products-csv-import-file-freebie/
import csv from "./Divi-Engine-WooCommerce-Sample-Products.csv?raw";

export async function GET() {
  const result = await new Promise((resolve) => {
    const rows: any[] = [];
    parseString(csv, { headers: true })
      .on("data", (row) => {
        row.images = row.images.split(",").map((image: string) => image.trim());
        return rows.push(row);
      })
      .on("end", () => {
        resolve(rows);
      });
  });

  return json(result);
}
