import { Menu } from "electron";
import { numberOfInstances, setNumberOfInstances } from "../config.js";
import { closeAllWindows, createWindows } from "../window.js";

const createMenuTemplate = () => {
  return [
    {
      label: "Janela",
      submenu: [
        {
          label: "Recarregar",
          role: "reload",
        },
        {
          label: 'Recarregar tudo',
          click: () => {
            closeAllWindows();
            createWindows();
          },
        },
        {
          label: 'Fechar tudo',
          click: () => {
            closeAllWindows();
          },
        },
      ],
    },
    // {
    //   label: "Configurações",
    //   submenu: [
    //     {
    //       label: "Número de Instâncias",
    //       submenu: [1, 2, 3].map((num) => ({
    //         label: `${num} Instância${num > 1 ? "s" : ""}`,
    //         type: "radio",
    //         checked: numberOfInstances === num,
    //         click: () => {
    //           setNumberOfInstances(num);
    //           closeAllWindows();
    //           createWindows();
    //         },
    //       })),
    //     },
    //   ],
    // },
  ];
};

export const setupMenu = () => {
  const menu = Menu.buildFromTemplate(createMenuTemplate());
  Menu.setApplicationMenu(menu);
};