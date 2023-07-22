// This one probably makes more sense than the second one
export function formatUserName(
  firstName: string | undefined,
  lastName: string | undefined,
  username: string
): string {
  if (firstName) {
    const fullName = `${firstName}${lastName ? ` ${lastName}` : ""}`;
    return fullName;
  }
  return username;
}

export function formatUserNameDefaultLastName(
  firstName: string | undefined,
  lastName: string | undefined = "",
  username: string
): string {
  if (firstName) {
    const fullName = `${firstName}${
      lastName.length === 0 ? ` ${lastName}` : ""
    }`;
    return fullName;
  }
  return username;
}
