import type { Story } from "@ladle/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { FocusedLayout } from "./FocusedLayout";

export const Default: Story = () => (
  <MemoryRouter initialEntries={["/search"]}>
    <Routes>
      <Route element={<FocusedLayout />}>
        <Route
          path="/search"
          element={
            <div className="flex flex-1 items-center justify-center py-24 text-sm text-gray-400">
              Search content goes here
            </div>
          }
        />
      </Route>
    </Routes>
  </MemoryRouter>
);
