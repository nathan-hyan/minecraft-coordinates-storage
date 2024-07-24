import { redirect } from "react-router-dom";

export const getLocation = async () => {
  return await fetch("http://localhost:3000/locations").then((res) =>
    res.json()
  );
};

export const getSingleLocation = async (id?: string) => {
  if (!id) throw new Error("No id provided");

  return await fetch(`http://localhost:3000/locations/${id}`).then((res) =>
    res.json()
  );
};

export const saveLocation = async ({ request }: { request: Request }) => {
  const data = await request.formData();
  const body = {
    locationName: data.get("locationName"),
    x: data.get("x"),
    y: data.get("disableY") ? "~" : data.get("y") ?? "~",
    z: data.get("z"),
    dimension: data.get("dimension"),
    structure: data.get("structure"),
  };

  await fetch("http://localhost:3000/locations", {
    method: "POST",
    body: JSON.stringify(body),
  });

  return redirect("/");
};

export const editLocation = async (request: Request, locationId?: string) => {
  if (!locationId) throw new Error("No id provided");

  const data = await request.formData();
  const body = {
    locationName: data.get("locationName"),
    x: data.get("x"),
    y: data.get("disableY") ? "~" : data.get("y") ?? "~",
    z: data.get("z"),
    dimension: data.get("dimension"),
    structure: data.get("structure"),
  };

  await fetch(`http://localhost:3000/locations/${locationId}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });

  return redirect("/");
};

export const deleteLocation = async (locationId?: string) => {
  if (!locationId) throw new Error("No id provided");

  await fetch(`http://localhost:3000/locations/${locationId}`, {
    method: "DELETE",
  });

  return redirect("/");
};
