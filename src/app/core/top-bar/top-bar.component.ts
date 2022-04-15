import { Component, OnInit } from '@angular/core';

import {
  Router,
  ActivatedRoute,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  } from "@angular/router";
//import { AuthService } from "../../auth.service";
//import { MenuService } from "../menu.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
  public waitPage: boolean;
  private accountButtonKey: string;
  private accountButton = {
    signIn: {
      name: "¡Ingresar!",
      disabled: false,
      description: "Ingresar o registrarse.",
      tip: "Ingresar o registrarse",
      color: "",
      icon: "perm_identity",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "privateView",
      action: "button"
    },
    register: {
      name: "¡Registrate!",
      disabled: true,
      description: "Registra tu cuenta como nuevo Usuario!",
      tip: "Registrate e ingresa",
      color: "",
      icon: "how_to_reg",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "",
      action: "button"
    },
    account: {
      name: "Cuenta",
      disabled: false,
      description: "Acciones para tu cuenta.",
      tip: "Tu cuenta...",
      color: "",
      icon: "perm_identity",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "profile",
      action: "accountmenu"
    }
  };
  private accountMenu = {
    profile: {
      name: "Mi cuenta",
      disabled: false,
      description: "Ajustes de perfil de Usuario.",
      tip: "Ajustes de perfil",
      color: "",
      icon: "perm_identity",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "profile",
      action: "profile"
    },
    editProperty: {
      name: "Mi propiedad",
      disabled: false,
      description: "Datos de tu propiedad.",
      tip: "Propiedades",
      color: "",
      icon: "home_work",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "editProperty",
      action: "editProperty",
    },
    signOut: {
      name: "Salir",
      disabled: false,
      description: "Cerrar tu sesión y salir.",
      tip: "Cerrar sesión",
      color: "",
      icon: "close",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "publicView",
      action: "signOut"
    }
  };
  private pageMenu = {
    privateView: {
      navBar: ["newClaim", "preferences"],
    },
    profile: {
      navBar: ["privateView", "preferences"],
    },
    newClaim: {
      navBar: ["privateView"],
    },
    preferences: {
      navBar: ["privateView", "profile"],
    },
    register: {
      navBar: []
    },
    editProperty: {
      navBar: ["privateView"],
    },
  };
  private navBarMenu = {
    publicView: {
      name: "Salir",
      tip: "Salir de la aplicación",
      description: "Salir de la aplicación.",
      color: "",
      icon: "exit_to_app",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "",
      action: "",
    },
    privateView: {
      name: "Panel principal",
      tip: "Panel principal",
      description: "Volver al panel principal.",
      color: "",
      icon: "home",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "",
      action: "",
    },
    newClaim: {
      name: "Nuevo reclamo",
      tip: "Crear reclamo",
      description: "Crear un nuevo reclamo.",
      color: "",
      icon: "gavel",
      iconColor: "",
      badge: "+",
      badgeColor: "",
      route: "",
      action: "",
    },
    edit: {
      name: "Editar",
      tip: "Editar",
      description: "Modificar datos.",
      color: "",
      icon: "edit",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "",
      action: "",
    },
    preferences: {
      name: "Preferencias",
      tip: "Ajusta tus preferencias",
      description: "Ajustar preferencias.",
      color: "",
      icon: "settings",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "",
      action: "",
    },
    profile: {
      name: "Perfil",
      tip: "Tu perfil de Usuario",
      description: "Perfil de Usuario.",
      color: "",
      icon: "perm_identity",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "",
      action: "",
    },
    register: {
      name: "Registro",
      tip: "Registro de Usuario",
      description: "Registro de nuevo Usuario.",
      color: "",
      icon: "perm_identity",
      iconColor: "",
      badge: "",
      badgeColor: "",
      route: "",
      action: "",
    },
  };

  constructor(
    //private router: Router,
    //private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
  }

}
