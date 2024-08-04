import nookies from "nookies";

export const setThemeMode = (theme) => {
  if (!theme) {
    console.error("Theme is null or undefined, cannot set cookie.");
    return;
  }

  console.log("Setting themeMode cookie:", theme); // Log themeMode being set
  nookies.set(null, "themeMode", theme, {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: "/",
  });
};

export const getThemeMode = () => {
  const cookies = nookies.get();
  console.log("Retrieved themeMode cookie:", cookies.themeMode); // Log themeMode retrieved
  return cookies.themeMode;
};
