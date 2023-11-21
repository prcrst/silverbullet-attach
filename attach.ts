import { editor } from "$sb/silverbullet-syscall/mod.ts";

export async function attachImage() {
  const uploadName = await editor.prompt("The name for the upload:")
  editor.attachFile(uploadName!, "image/*");
}
