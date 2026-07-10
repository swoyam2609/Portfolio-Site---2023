export function openUrl(url: string) {
  if (typeof window !== "undefined") window.open(url, "_blank", "noopener");
}

export function mailto(email: string) {
  if (typeof window !== "undefined") window.location.href = `mailto:${email}`;
}
