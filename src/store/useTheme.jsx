import { create } from "zustand";
import Cookies from "js-cookie";

const cookieData = Cookies.get("theme") ? JSON.parse(Cookies.get("theme")) : {};

const defaultColor= cookieData.color || "black";
const defaultBgColor =cookieData.bgColor ||"#7AA2E3";
const defaultPrimaryColor =cookieData.primaryColor ||"#F8F6E3";


const useTheme = create((set) => ({
  theme: {color:defaultColor, bgColor:defaultBgColor , primaryColor:defaultPrimaryColor},
  setTheme :(data) => {
    Cookies.set("theme", JSON.stringify(data), {sameSite:"Lax"});
    set({theme: {color:data.color, bgColor:data.bgColor, primaryColor:data.primaryColor}})
  },
  setDefault :() =>{
  Cookies.remove("theme")
  set({theme: {color:defaultColor, bgColor:defaultBgColor, primaryColor:defaultPrimaryColor}});

}
}))


export default useTheme;