import create from 'zustand';

const Nightmode = create((set) => ({
    theme: 'light',
    isNightMode: false, // Add a toggle state for night/dark mode
    setTheme: (theme) => set({ theme }),
    setDefault: () => set({ theme: 'light', isNightMode: false }), // Reset to default theme
    toggleNightMode: () => set((state) => ({ isNightMode: !state.isNightMode })), // Toggle night mode
}));

export default Nightmode;
