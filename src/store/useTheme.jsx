import { create } from "zustand";

const defaultColor= "#430A5D";
const defaultBgColor ="#EBC49F";
const useTheme = create((set) => ({
  z_color: defaultColor,
  z_bgColor: defaultBgColor,
  setColor :(data1,data2) => set({z_color:data1,z_bgColor:data2}),
  setDefault :() => set({z_color:defaultColor,z_bgColor:defaultBgColor })

}));


export default useTheme;