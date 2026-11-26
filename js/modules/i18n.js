/**
 * ============================================================================
 * @fileoverview Localization (i18n) & Language State Module
 * @module       js/modules/i18n
 * @author       Muhammed Enes BAL | Robotics & Autonomous Systems Engineer
 * @description  Manages active language resolution ("tr" | "en"), persistent
 *               storage in `localStorage` with strict error handling, and
 *               static DOM node translation via `[data-i18n]` attributes.
 * ============================================================================
 */

"use strict";

/**
 * Storage key used to persist the user's preferred language in localStorage.
 * @constant {string}
 */
const LANG_STORAGE_KEY = "meb_lang";

/**
 * Resolves the initial language preference using a 3-tier fallback strategy:
 * 1. Explicit user preference saved in `localStorage`
 * 2. Browser UI language (`navigator.language`)
 * 3. Default fallback ("tr")
 *
 * @returns {"tr" | "en"} Resolved language code
 */
function resolveInitialLanguage() {
  try {
    const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
    if (savedLang === "tr" || savedLang === "en") {
      return savedLang;
    }
  } catch (err) {
    console.warn("[i18n] localStorage access restricted, falling back to browser locale.", err);
  }

  const browserLang =
    typeof navigator !== "undefined" &&
    navigator.language &&
    navigator.language.toLowerCase().startsWith("tr")
      ? "tr"
      : "en";

  return browserLang || "tr";
}

/**
 * Persists the user's selected language code into `localStorage`.
 *
 * @param {"tr" | "en"} lang - Language code to save
 */
function saveLanguagePreference(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (err) {
    console.warn("[i18n] Unable to persist language selection.", err);
  }
}

/**
 * Translates all static DOM nodes decorated with `[data-i18n]` attributes
 * using the `UI_TEXT` dictionary for the specified language.
 *
 * @param {"tr" | "en"} lang - Active language code
 * @param {HTMLElement|null} langToggleBtn - Optional language switch button to update
 */
function translateStaticDOM(lang, langToggleBtn) {
  document.documentElement.lang = lang;

  if (langToggleBtn) {
    langToggleBtn.textContent = lang === "tr" ? "EN" : "TR";
    langToggleBtn.setAttribute(
      "aria-label",
      lang === "tr" ? "Switch language to English" : "Dili Türkçeye çevir"
    );
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (typeof UI_TEXT !== "undefined" && UI_TEXT[lang] && UI_TEXT[lang][key]) {
      el.textContent = UI_TEXT[lang][key];
    }
  });
}
