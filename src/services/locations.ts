import { redirect } from "react-router-dom";
import { LoaderType } from "../globals/types";

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

export const addNote = async (id?: string, noteToAdd?: FormData) => {
  console.log("Called!");
  if (!id) throw new Error("No id provided");
  if (!noteToAdd) throw new Error("No note provided");

  const newBody = (await getSingleLocation(id)) as LoaderType;
  const newNote = noteToAdd.get("note");

  if (!newNote) throw new Error("No note provided");

  newBody.notes.push(String(newNote));

  await fetch(`http://localhost:3000/locations/${id}`, {
    method: "PUT",
    body: JSON.stringify(newBody),
  });

  return redirect(`/details/${id}`);
};

export const deleteNote = async (id?: string, noteToDelete?: string) => {
  if (!id) throw new Error("No id provided");
  if (!noteToDelete) throw new Error("No note provided");

  const newBody = (await getSingleLocation(id)) as LoaderType;
  newBody.notes = newBody.notes.filter((note) => note !== noteToDelete);

  await fetch(`http://localhost:3000/locations/${id}`, {
    method: "PUT",
    body: JSON.stringify(newBody),
  });

  return redirect(`/details/${id}`);
};

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
