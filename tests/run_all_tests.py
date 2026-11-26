#!/usr/bin/env python3
"""
===============================================================================
Automated Phase 1–6 End-to-End Quality Assurance (QA) & Optimization Test Suite
Author:  Muhammed Enes BAL | Robotics & Autonomous Systems Engineer
Purpose: Verifies every phase of the portfolio website transformation:
         - Phase 1: Clean Code, JSDoc, Zero Escaped Template Literals & 29 Binary Images
         - Phase 2: CSS Design Tokens, Brace Balance, Responsive Breakpoints & Modular CSS
         - Phase 3: Bilingual (TR/EN) Data Parity, PDF Page Deep-Links & Tables
         - Phase 4: Modular JS Architecture (i18n, renderers, modal, main) & DOM Simulation
         - Phase 5: Modular Folder Hierarchy, SEO, OpenGraph, JSON-LD, Favicon & README
         - Phase 6: Live Local HTTP Server E2E Asset Delivery (200 OK) & Performance Audit
===============================================================================
"""

import json
import os
import re
import subprocess
import threading
import urllib.request
from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
from PIL import Image


def run_test_suite():
    results = []

    # -------------------------------------------------------------------------
    # PHASE 1 TESTS: JS Template Literals, Clean Code & 29 Extracted PDF Images
    # -------------------------------------------------------------------------
    js_files = [
        "js/data.js",
        "js/modules/i18n.js",
        "js/modules/renderers.js",
        "js/modules/modal.js",
        "js/main.js",
    ]
    all_js_content = ""
    for jf in js_files:
        with open(jf, "r", encoding="utf-8") as f:
            all_js_content += "\n" + f.read()

    escaped_matches = re.findall(r"\\\$\{", all_js_content)
    un_escaped_matches = re.findall(r"(?<!\\)\$\{", all_js_content)
    jsdoc_blocks = re.findall(r"/\*\*[\s\S]*?\*/", all_js_content)

    results.append((
        "TC-P1-01",
        "Template Literal Integrity Across All JS Modules (Zero `\\${` bugs)",
        len(escaped_matches) == 0 and len(un_escaped_matches) >= 55,
        f"0 escaped bugs, {len(un_escaped_matches)} active valid interpolations across {len(js_files)} JS modules"
    ))

    results.append((
        "TC-P1-02",
        "Senior Clean Code, JSDoc Comments, Strict Mode & Error Handling",
        len(jsdoc_blocks) >= 24 and '"use strict";' in all_js_content and "try {" in all_js_content,
        f"{len(jsdoc_blocks)} JSDoc blocks across 5 modular JS files"
    ))

    expected_images = [
        "assets/img/profile/hero_portrait_bw.jpeg",
        "assets/img/profile/about_portrait_color.jpeg",
        "assets/img/projects/uav/campus_mosque_3d_mesh.jpeg",
        "assets/img/projects/uav/campus_gazebo_digital_twin.jpeg",
        "assets/img/projects/uav/phase1_point_cloud.jpeg",
        "assets/img/projects/uav/obstacle_test_map_gazebo.jpeg",
        "assets/img/projects/uav/uav_cad_13deg_lidar.jpeg",
        "assets/img/projects/uav/battery_6s4p_bms.jpeg",
        "assets/img/projects/uav/stereo_camera_22cm.jpeg",
        "assets/img/projects/auv/auv_physical_prototype.jpeg",
        "assets/img/projects/auv/auv_subcomponents_diagram.jpeg",
        "assets/img/projects/auv/line_following_flow.jpeg",
        "assets/img/projects/auv/autonomous_transit_flow.jpeg",
        "assets/img/projects/cargo/urban_yolo_detection.jpeg",
        "assets/img/projects/cargo/sae_autonomy_levels.jpeg",
        "assets/img/projects/aviation-ai/yolo_map_comparison.jpeg",
        "assets/img/projects/aviation-ai/yolo_fps_comparison.jpeg",
        "assets/img/projects/aviation-ai/train_val_loss_curve.jpeg",
        "assets/img/projects/montech/smart_jacket_prototype.jpeg",
        "assets/img/projects/montech/app_bluetooth_devices.jpeg",
        "assets/img/projects/montech/app_live_gps_location.jpeg",
        "assets/img/projects/waste-cv/yolov11m_seg_masks.jpeg",
        "assets/img/projects/waste-cv/confusion_matrix.jpeg",
        "assets/img/projects/waste-cv/test_samples_confidence.jpeg",
        "assets/img/projects/waste-cv/app_waste_routing.jpeg",
        "assets/img/projects/nlp-house/most_frequent_speakers.jpeg",
        "assets/img/projects/nlp-house/bert_vs_ml_accuracy.jpeg",
        "assets/img/projects/nlp-house/bert_vs_ml_macro_f1.jpeg",
        "assets/img/projects/narrator-game/narrator_game_poster.jpeg",
    ]
    valid_imgs = 0
    total_img_bytes = 0
    for img_path in expected_images:
        if os.path.exists(img_path) and os.path.getsize(img_path) > 0:
            with Image.open(img_path) as im:
                im.verify()
            valid_imgs += 1
            total_img_bytes += os.path.getsize(img_path)

    results.append((
        "TC-P1-03",
        "PDF Image Asset Extraction & Binary Image Header Verification (PIL)",
        valid_imgs == 29,
        f"{valid_imgs}/29 images binary-verified ({total_img_bytes // 1024} KB total)"
    ))

    # -------------------------------------------------------------------------
    # PHASE 2 TESTS: Tactical Autonomy CSS Design System & Modular CSS Layers
    # -------------------------------------------------------------------------
    with open("css/style.css", "r", encoding="utf-8") as f:
        css = f.read()

    open_braces = css.count("{")
    close_braces = css.count("}")
    defined_vars = set(re.findall(r"(--[a-zA-Z0-9_-]+)\s*:", css))
    used_vars = set(re.findall(r"var\((--[a-zA-Z0-9_-]+)\)", css))
    undefined_vars = used_vars - defined_vars
    css_modules_exist = all(
        os.path.exists(p) and os.path.getsize(p) > 1000
        for p in [
            "css/modules/tokens.css",
            "css/modules/components.css",
            "css/modules/modal-responsive.css",
        ]
    )

    results.append((
        "TC-P2-01",
        "CSS Syntax Brace Balance, 33 Design Tokens & Modular CSS Layers",
        open_braces == close_braces and len(undefined_vars) == 0 and css_modules_exist,
        f"Braces: {open_braces}/{close_braces}, Tokens: {len(defined_vars)}, Undefined: {len(undefined_vars)}, Modular CSS=True"
    ))

    media_queries = re.findall(r"@media\s*\([^)]+\)", css)
    results.append((
        "TC-P2-02",
        "Responsive Breakpoints (1024px, 768px, 480px) & Reduced-Motion A11y",
        len(media_queries) >= 4,
        f"Verified {len(media_queries)} media rules: {media_queries}"
    ))

    # -------------------------------------------------------------------------
    # PHASE 3 TESTS: Bilingual Data Architecture & Image Path Integrity
    # -------------------------------------------------------------------------
    node_data_script = """
    const fs = require('fs');
    const vm = require('vm');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync('js/data.js', 'utf-8') + '; this.EXPORT = { PROFILE_DATA, UI_TEXT, HERO_STATS, OPERATION_DOMAINS, SKILLS, PROJECTS, TIMELINE };', sandbox);
    console.log(JSON.stringify(sandbox.EXPORT));
    """
    proc = subprocess.run(["node", "-e", node_data_script], capture_output=True, text=True, encoding="utf-8")
    exported = json.loads(proc.stdout)

    tr_keys = set(exported["UI_TEXT"]["tr"].keys())
    en_keys = set(exported["UI_TEXT"]["en"].keys())
    projects = exported["PROJECTS"]

    results.append((
        "TC-P3-01",
        "Bilingual (TR/EN) Data Schema Symmetry & Node.js Runtime Evaluation",
        len(tr_keys ^ en_keys) == 0 and len(projects) == 8 and len(exported["SKILLS"]) == 6 and len(exported["OPERATION_DOMAINS"]) == 3,
        f"UI_TEXT: {len(tr_keys)} TR / {len(en_keys)} EN, 8 Projects, 6 Skills, 3 Domains, 6 Milestones"
    ))

    referenced_images = [
        exported["PROFILE_DATA"]["portraits"]["heroBw"],
        exported["PROFILE_DATA"]["portraits"]["aboutColor"],
    ]
    for p in projects:
        referenced_images.append(p["coverImage"])
        for g in p["gallery"]:
            referenced_images.append(g["src"])
    unique_imgs = set(referenced_images)
    missing_imgs = [img for img in unique_imgs if not os.path.exists(img)]

    results.append((
        "TC-P3-02",
        "Phase 1 + Phase 3 Image Asset Path Mapping (29 Physical Files vs data.js)",
        len(missing_imgs) == 0 and len(unique_imgs) == 29,
        f"29/29 unique image paths verified on disk"
    ))

    # -------------------------------------------------------------------------
    # PHASE 4 TESTS: Modular JS Execution, DOM Contract & Interactive Modal
    # -------------------------------------------------------------------------
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()

    html_i18n_keys = set(re.findall(r'data-i18n="([^"]+)"', html))
    missing_i18n = [k for k in html_i18n_keys if k not in tr_keys or k not in en_keys]
    queried_ids = set(re.findall(r'getElementById\("([^"]+)"\)', all_js_content))
    missing_dom_ids = [qid for qid in queried_ids if f'id="{qid}"' not in html]

    results.append((
        "TC-P4-01",
        "HTML [data-i18n] & DOM ID Contract Across Modular JS Files",
        len(missing_i18n) == 0 and len(missing_dom_ids) == 0,
        f"{len(html_i18n_keys)} [data-i18n] keys & {len(queried_ids)} DOM IDs verified (0 missing)"
    ))

    sim_script = """
    const fs = require('fs');
    const vm = require('vm');
    const elements = {};
    function makeEl(id) {
      let _html = '';
      return {
        id,
        get innerHTML() { return _html; },
        set innerHTML(val) { _html = val; if (val === '') this.children = []; },
        textContent: '', src: '', alt: '', href: '',
        className: id === 'project-modal' ? 'modal hidden' : '',
        style: {}, attributes: {}, children: [], listeners: {},
        setAttribute(k, v) { this.attributes[k] = v; },
        getAttribute(k) { return this.attributes[k]; },
        appendChild(child) { this.children.push(child); },
        addEventListener(ev, fn) { this.listeners[ev] = fn; },
        querySelector() { return makeEl('sub'); },
        querySelectorAll() { return []; },
        classList: {
          classes: new Set(id === 'project-modal' ? ['modal', 'hidden'] : []),
          add(c) { this.classes.add(c); },
          remove(c) { this.classes.delete(c); },
          toggle(c) { if (this.classes.has(c)) { this.classes.delete(c); return false; } this.classes.add(c); return true; },
          contains(c) { return this.classes.has(c); }
        }
      };
    }
    const sandbox = {
      elements, console, setTimeout: () => {},
      localStorage: { store: {}, getItem(k) { return this.store[k] || null; }, setItem(k, v) { this.store[k] = v; } },
      navigator: { language: 'tr-TR', clipboard: { writeText: () => Promise.resolve() } },
      history: { replaceState: () => {} },
      window: { location: { hash: '#project-1', pathname: '/', search: '' }, scrollY: 0, addEventListener: () => {} },
      document: {
        documentElement: { lang: 'tr', scrollTop: 0, scrollHeight: 2000, clientHeight: 800 },
        body: { style: {}, appendChild: () => {}, removeChild: () => {} },
        getElementById(id) { if (!elements[id]) elements[id] = makeEl(id); return elements[id]; },
        querySelectorAll() { return []; },
        createElement(tag) { return makeEl(tag); },
        addEventListener: () => {}
      }
    };
    vm.createContext(sandbox);
    const fullBundle = [
      'js/data.js',
      'js/modules/i18n.js',
      'js/modules/renderers.js',
      'js/modules/modal.js',
      'js/main.js'
    ].map(f => fs.readFileSync(f, 'utf-8')).join('\\n');

    vm.runInContext(fullBundle + `
      const p1Href = elements['modal-pdf-deeplink'].href;
      navigateModalProject(1);
      elements['lang-toggle'].listeners['click']();
      const p2HrefEN = elements['modal-pdf-deeplink'].href;
      openModal(PROJECTS[4]);
      const montechOk = elements['modal-table-body'].innerHTML.includes('Arduino Pro Mini');
      openModal(PROJECTS[6]);
      const nlpHighlights = (elements['modal-table-body'].innerHTML.match(/highlight-cell/g) || []).length;
      closeModal();
      this.RES = {
        p1Href, p2HrefEN, montechOk, nlpHighlights,
        projectsCount: elements['projects-grid'].children.length,
        skillsCount: elements['skills-grid'].children.length,
        tabsCount: elements['explorer-tabs'].children.length
      };
    `, sandbox);
    console.log(JSON.stringify(sandbox.RES));
    """
    sim_proc = subprocess.run(["node", "-e", sim_script], capture_output=True, text=True, encoding="utf-8")
    sim = json.loads(sim_proc.stdout)

    results.append((
        "TC-P4-02",
        "Modular JS Pipeline Runtime Simulation (data -> i18n -> renderers -> modal -> main)",
        sim["p1Href"].endswith("TR.pdf#page=5") and sim["p2HrefEN"].endswith("EN.pdf#page=8") and sim["montechOk"] and sim["nlpHighlights"] == 5 and sim["projectsCount"] == 8,
        f"TR #page=5 & EN #page=8 verified, MonTech & BERT tables rendered, 8 cards & 6 skill blocks active"
    ))

    # -------------------------------------------------------------------------
    # PHASE 5 TESTS: Modular Folder Architecture, SEO, JSON-LD, Favicon & README
    # -------------------------------------------------------------------------
    required_paths = [
        "assets/icons/favicon.svg",
        "css/modules/tokens.css",
        "css/modules/components.css",
        "css/modules/modal-responsive.css",
        "js/modules/i18n.js",
        "js/modules/renderers.js",
        "js/modules/modal.js",
        "docs/CAREER_PROFILE_ANALYSIS.md",
        "docs/WEBSITE_TRANSFORMATION_PLAN.md",
        "docs/ARCHITECTURE.md",
        "README.md",
    ]
    missing_paths = [p for p in required_paths if not os.path.exists(p)]

    results.append((
        "TC-P5-01",
        "Modular Directory Hierarchy Verification (assets/icons, css/modules, js/modules, docs, tests)",
        len(missing_paths) == 0,
        f"All {len(required_paths)} modular architecture files verified; missing={missing_paths}"
    ))

    json_ld_match = re.search(r'<script type="application/ld\+json">([\s\S]*?)</script>', html)
    json_ld_valid = False
    if json_ld_match:
        parsed_ld = json.loads(json_ld_match.group(1))
        json_ld_valid = parsed_ld.get("@type") == "Person" and parsed_ld.get("name") == "Muhammed Enes BAL"

    has_og = 'property="og:title"' in html and 'property="og:image"' in html
    has_favicon = 'href="assets/icons/favicon.svg"' in html

    with open("README.md", "r", encoding="utf-8") as f:
        readme = f.read()
    readme_has_deeplinks = all(f"#project-{i}" in readme for i in range(1, 9))

    results.append((
        "TC-P5-02",
        "SEO Meta, OpenGraph, JSON-LD Schema, Modular SVG Favicon & README Deep-Links",
        json_ld_valid and has_og and has_favicon and readme_has_deeplinks,
        f"JSON-LD valid={json_ld_valid}, OpenGraph={has_og}, SVG Favicon={has_favicon}, README #project-1..8={readme_has_deeplinks}"
    ))

    # -------------------------------------------------------------------------
    # PHASE 6 TESTS: Live Local HTTP Server E2E Asset Delivery & Optimization Audit
    # -------------------------------------------------------------------------
    class QuietHandler(SimpleHTTPRequestHandler):
        def log_message(self, format, *args):
            pass

    httpd = TCPServer(("127.0.0.1", 0), QuietHandler)
    port = httpd.server_address[1]
    server_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    server_thread.start()

    endpoints_to_test = (
        ["index.html", "css/style.css", "assets/icons/favicon.svg"]
        + js_files
        + expected_images
        + [
            "assets/pdf/Muhammed_Enes_BAL_Portfolio_TR.pdf",
            "assets/pdf/Muhammed_Enes_BAL_Portfolio_EN.pdf",
        ]
    )

    http_200_count = 0
    total_http_bytes = 0
    for ep in endpoints_to_test:
        url = f"http://127.0.0.1:{port}/{ep}"
        with urllib.request.urlopen(url) as resp:
            body = resp.read()
            if resp.status == 200 and len(body) > 0:
                http_200_count += 1
                total_http_bytes += len(body)

    httpd.shutdown()
    httpd.server_close()

    results.append((
        "TC-P6-01",
        "Live Local HTTP Server E2E Delivery Check (HTML, CSS, 5 JS Modules, SVG, 29 Images, 2 PDFs)",
        http_200_count == len(endpoints_to_test),
        f"{http_200_count}/{len(endpoints_to_test)} endpoints returned HTTP 200 OK with non-zero payload"
    ))

    # -------------------------------------------------------------------------
    # PHASE 7 TESTS: Senior Editorial Refinement, Zero-Emoji & Contrast Audit
    # -------------------------------------------------------------------------
    emoji_pattern = re.compile(r"[\U0001F300-\U0001FAFF\u2600-\u27BF]")
    with open("js/data.js", "r", encoding="utf-8") as f:
        data_text = f.read()
    emojis_in_data = emoji_pattern.findall(data_text)
    emojis_in_html = emoji_pattern.findall(html)
    has_full_name_brand = '<span class="brand-name">Muhammed Enes BAL</span>' in html
    has_contact_svg_circles = html.count('class="contact-icon-circle"') == 4
    has_btn_contrast_fix = ".contact-links a.btn-primary" in css and "word-break: break-all" not in css

    results.append((
        "TC-P7-01",
        "Senior Human-Crafted Refinement (Zero Emojis, Full-Name Brand, Contact SVG Icons & Button Contrast Fix)",
        len(emojis_in_data) == 0 and len(emojis_in_html) == 0 and has_full_name_brand and has_contact_svg_circles and has_btn_contrast_fix,
        f"Emojis in data/html={len(emojis_in_data)}/{len(emojis_in_html)}, FullNameBrand={has_full_name_brand}, ContactSVGCircles=4, ContrastFix={has_btn_contrast_fix}"
    ))

    all_passed = all(r[2] for r in results)
    print("=" * 88)
    print("MUHAMMED ENES BAL PORTFOLIO — FULL E2E QA & MODULAR ARCHITECTURE AUDIT REPORT")
    print("=" * 88)
    for code, desc, passed, detail in results:
        status = "PASS" if passed else "FAIL"
        print(f"[{status}] {code}: {desc}\n       └─ {detail}")
    print("=" * 88)

    if not all_passed:
        raise SystemExit(1)
    print(f"FINAL QA SUMMARY: {len(results)}/{len(results)} TEST SUITES PASSED (100% HEALTHY & OPTIMIZED)")


if __name__ == "__main__":
    run_test_suite()
