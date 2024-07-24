import { LoaderType } from "@globals/types";
import { redirect } from "react-router-dom";
import { getSingleLocation } from "./locations";

export const addNote = async (id?: string, noteToAdd?: FormData) => {
  if (!id) throw new Error("No id provided");
  if (!noteToAdd) throw new Error("No note provided");

  const newBody = (await getSingleLocation(id)) as LoaderType;
  const newNote = noteToAdd.get("note");

  if (!newNote) throw new Error("No note provided");

  try {
    newBody.notes.push(String(newNote));
  } catch (e) {
    newBody.notes = [String(newNote)];
  }

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
