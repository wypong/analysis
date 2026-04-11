<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:exsl="http://exslt.org/common"
  extension-element-prefixes="exsl">

  <xsl:import href="/home/pong/.ptx/2.38.2/core/xsl/pretext-latex.xsl"/>

  <!-- Avoid polyglossia's unsupported usmax hyphenation variant on this TeX Live. -->
  <xsl:template name="font-support">
    <xsl:text>%% Fonts.  Conditional on LaTex engine employed.&#xa;</xsl:text>
    <xsl:text>%% Default Text Font: The Latin Modern fonts are&#xa;</xsl:text>
    <xsl:text>%% "enhanced versions of the [original TeX] Computer Modern fonts."&#xa;</xsl:text>
    <xsl:text>%% We use them as the default text font for PreTeXt output.&#xa;</xsl:text>
    <xsl:if test="$b-needs-mono-font">
      <xsl:text>%% Default Monospace font: Inconsolata (aka zi4)&#xa;</xsl:text>
      <xsl:text>%% Sponsored by TUG: http://levien.com/type/myfonts/inconsolata.html&#xa;</xsl:text>
      <xsl:text>%% Loaded for documents with intentional objects requiring monospace&#xa;</xsl:text>
      <xsl:text>%% See package documentation for excellent instructions&#xa;</xsl:text>
      <xsl:text>%% fontspec will work universally if we use filename to locate OTF files&#xa;</xsl:text>
      <xsl:text>%% Loads the "upquote" package as needed, so we don't have to&#xa;</xsl:text>
      <xsl:text>%% Upright quotes might come from the  textcomp  package, which we also use&#xa;</xsl:text>
      <xsl:text>%% We employ the shapely \ell to match Google Font version&#xa;</xsl:text>
      <xsl:text>%% pdflatex: "varl" package option produces shapely \ell&#xa;</xsl:text>
      <xsl:text>%% pdflatex: "var0" package option produces plain zero (not used)&#xa;</xsl:text>
      <xsl:text>%% pdflatex: "varqu" package option produces best upright quotes&#xa;</xsl:text>
      <xsl:text>%% xelatex,lualatex: add OTF StylisticSet 1 for shapely \ell&#xa;</xsl:text>
      <xsl:text>%% xelatex,lualatex: add OTF StylisticSet 2 for plain zero (not used)&#xa;</xsl:text>
      <xsl:text>%% xelatex,lualatex: add OTF StylisticSet 3 for upright quotes&#xa;</xsl:text>
      <xsl:text>%%&#xa;</xsl:text>
    </xsl:if>
    <xsl:text>%% Automatic Font Control&#xa;</xsl:text>
    <xsl:text>%% Portions of a document, are, or may, be affected by defined commands&#xa;</xsl:text>
    <xsl:text>%% These are perhaps more flexible when using  xelatex  rather than  pdflatex&#xa;</xsl:text>
    <xsl:text>%% The following definitions are meant to be re-defined in a style, using \renewcommand&#xa;</xsl:text>
    <xsl:text>%% They are scoped when employed (in a TeX group), and so should not be defined with an argument&#xa;</xsl:text>
    <xsl:text>\newcommand{\divisionfont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\blocktitlefont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\contentsfont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\pagefont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\tabularfont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\xreffont}{\relax}&#xa;</xsl:text>
    <xsl:text>\newcommand{\titlepagefont}{\relax}&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>\ifthenelse{\boolean{xetex} \or \boolean{luatex}}{%&#xa;</xsl:text>
    <xsl:text>%% begin: font setup and configuration for use with xelatex&#xa;</xsl:text>
    <xsl:text>%% Generally, xelatex is necessary for non-Western fonts&#xa;</xsl:text>
    <xsl:text>%% fontspec package provides extensive control of system fonts,&#xa;</xsl:text>
    <xsl:text>%% meaning *.otf (OpenType), and apparently *.ttf (TrueType)&#xa;</xsl:text>
    <xsl:text>%% that live *outside* your TeX/MF tree, and are controlled by your *system*&#xa;</xsl:text>
    <xsl:text>%% (it is possible that a TeX distribution will place fonts in a system location)&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>%% The fontspec package is the best vehicle for using different fonts in  xelatex&#xa;</xsl:text>
    <xsl:text>%% So we load it always, no matter what a publisher or style might want&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>\usepackage{fontspec}&#xa;</xsl:text>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>%% begin: xelatex main font ("font-xelatex-main" template)&#xa;</xsl:text>
    <xsl:call-template name="font-xelatex-main"/>
    <xsl:text>%% end:   xelatex main font ("font-xelatex-main" template)&#xa;</xsl:text>
    <xsl:text>%% begin: xelatex math font ("font-xelatex-math" template)&#xa;</xsl:text>
    <xsl:call-template name="font-xelatex-math"/>
    <xsl:text>%% end:   xelatex math font ("font-xelatex-math" template)&#xa;</xsl:text>
    <xsl:text>%% begin: xelatex mono font ("font-xelatex-mono" template)&#xa;</xsl:text>
    <xsl:text>%% (conditional on non-trivial uses being present in source)&#xa;</xsl:text>
    <xsl:call-template name="font-xelatex-mono"/>
    <xsl:text>%% end:   xelatex mono font ("font-xelatex-mono" template)&#xa;</xsl:text>
    <xsl:text>%% begin: xelatex font adjustments ("font-xelatex-style" template)&#xa;</xsl:text>
    <xsl:call-template name="font-xelatex-style"/>
    <xsl:text>%% end:   xelatex font adjustments ("font-xelatex-style" template)&#xa;</xsl:text>
    <xsl:if test="$b-has-icon">
      <xsl:text>%% Icons being used, so xelatex needs a system font&#xa;</xsl:text>
      <xsl:text>%% This can only be determined at compile-time&#xa;</xsl:text>
      <xsl:call-template name="xelatex-font-check">
        <xsl:with-param name="font-name" select="'Font Awesome 5 Free'"/>
      </xsl:call-template>
      <xsl:call-template name="xelatex-font-check">
        <xsl:with-param name="font-name" select="'Font Awesome 5 Brands'"/>
      </xsl:call-template>
    </xsl:if>
    <xsl:text>%%&#xa;</xsl:text>
    <xsl:text>%% Extensive support for other languages&#xa;</xsl:text>
    <xsl:text>\usepackage{polyglossia}&#xa;</xsl:text>
    <xsl:text>%% Set main/default language based on pretext/@xml:lang value&#xa;</xsl:text>
    <xsl:choose>
      <xsl:when test="$document-language = 'en-US'">
        <xsl:text>%% document language code is "en-US", US English&#xa;</xsl:text>
        <xsl:text>\setmainlanguage[variant=american]{english}&#xa;</xsl:text>
      </xsl:when>
      <xsl:when test="$document-language = 'el'">
        <xsl:text>%% document language code is "el", Modern Greek (1453-)&#xa;</xsl:text>
        <xsl:text>\setmainlanguage[variant=monotonic]{greek}&#xa;</xsl:text>
      </xsl:when>
      <xsl:when test="$document-language = 'es-ES'">
        <xsl:text>%% document language code is "es-ES", Spanish&#xa;</xsl:text>
        <xsl:text>\setmainlanguage{spanish}&#xa;</xsl:text>
      </xsl:when>
      <xsl:when test="$document-language = 'hu-HU'">
        <xsl:text>%% document language code is "hu-HU", Magyar (Hungarian)&#xa;</xsl:text>
        <xsl:text>\setmainlanguage{magyar}&#xa;</xsl:text>
      </xsl:when>
      <xsl:when test="$document-language = 'ko-KR'">
        <xsl:text>%% document language code is "ko-KR", Korean&#xa;</xsl:text>
        <xsl:text>\setmainlanguage{korean}&#xa;</xsl:text>
      </xsl:when>
      <xsl:when test="$document-language = 'ru-RU'">
        <xsl:text>%% document language code is "ru-RU", Russian&#xa;</xsl:text>
        <xsl:text>\setmainlanguage{russian}&#xa;</xsl:text>
      </xsl:when>
      <xsl:when test="$document-language = 'vi-VN'">
        <xsl:text>%% document language code is "vi-VN", Vietnamese&#xa;</xsl:text>
        <xsl:text>\setmainlanguage{vietnamese}&#xa;</xsl:text>
      </xsl:when>
      <xsl:when test="$document-language = 'it-IT'">
        <xsl:text>%% document language code is "it-IT", Italian&#xa;</xsl:text>
        <xsl:text>\setmainlanguage{italian}&#xa;</xsl:text>
      </xsl:when>
    </xsl:choose>
    <xsl:text>%% Enable secondary languages based on discovery of @xml:lang values&#xa;</xsl:text>
    <xsl:variable name="secondary-languages" select="$document-root//@xml:lang"/>
    <xsl:variable name="sorted-language-values-rtf">
      <xsl:for-each select="$secondary-languages">
        <xsl:sort select="."/>
        <language>
          <xsl:value-of select="."/>
        </language>
      </xsl:for-each>
    </xsl:variable>
    <xsl:variable name="sorted-language-values" select="exsl:node-set($sorted-language-values-rtf)"/>
    <xsl:for-each select="$sorted-language-values/language">
      <xsl:if test="not(. = preceding-sibling::language)">
        <xsl:variable name="language">
          <xsl:value-of select="."/>
        </xsl:variable>
        <xsl:choose>
          <xsl:when test="not($document-language = 'en-US') and ($language = 'en-US')">
            <xsl:text>%% document contains language code "en-US", US English&#xa;</xsl:text>
            <xsl:text>\setotherlanguage[variant=american]{english}&#xa;</xsl:text>
          </xsl:when>
          <xsl:when test="not($document-language = 'es-ES') and ($language = 'es-ES')">
            <xsl:text>%% document contains language code "es-ES", Spanish&#xa;</xsl:text>
            <xsl:text>\setotherlanguage{spanish}&#xa;</xsl:text>
          </xsl:when>
          <xsl:when test="not($document-language = 'el') and ($language = 'el')">
            <xsl:text>%% document contains language code "el", Modern Greek (1453-)&#xa;</xsl:text>
            <xsl:text>\setotherlanguage[variant=monotonic]{greek}&#xa;</xsl:text>
          </xsl:when>
          <xsl:when test="not($document-language = 'hu-HU') and ($language = 'hu-HU')">
            <xsl:text>%% document contains language code "hu-HU", Magyar (Hungarian)&#xa;</xsl:text>
            <xsl:text>\setotherlanguage{magyar}&#xa;</xsl:text>
          </xsl:when>
          <xsl:when test="not($document-language = 'ko-KR') and ($language = 'ko-KR')">
            <xsl:text>%% document contains language code "ko-KR", Korean&#xa;</xsl:text>
            <xsl:text>\setotherlanguage{korean}&#xa;</xsl:text>
          </xsl:when>
          <xsl:when test="not($document-language = 'ru-RU') and ($language = 'ru-RU')">
            <xsl:text>%% document contains language code "ru-RU", Russian&#xa;</xsl:text>
            <xsl:text>\setotherlanguage{russian}&#xa;</xsl:text>
          </xsl:when>
          <xsl:when test="not($document-language = 'vi-VN') and ($language = 'vi-VN')">
            <xsl:text>%% document contains language code "vi-VN", Vietnamese&#xa;</xsl:text>
            <xsl:text>\setotherlanguage{vietnamese}&#xa;</xsl:text>
          </xsl:when>
        </xsl:choose>
      </xsl:if>
    </xsl:for-each>
    <xsl:text>%% Enable fonts/scripts based on discovery of @xml:lang values&#xa;</xsl:text>
    <xsl:text>%% Western languages should be ably covered by Latin Modern Roman&#xa;</xsl:text>
    <xsl:for-each select="$sorted-language-values/language">
      <xsl:if test="not(. = preceding-sibling::language)">
        <xsl:variable name="language">
          <xsl:value-of select="."/>
        </xsl:variable>
        <xsl:choose>
          <xsl:when test="$language = 'el'">
            <xsl:text>%% Font for Modern Greek&#xa;</xsl:text>
            <xsl:text>%% Font families: CMU Serif (Ubuntu fonts-cmu package), Linux Libertine O, GFS Artemisia&#xa;</xsl:text>
            <xsl:text>%% OTF Script needs to be enabled&#xa;</xsl:text>
            <xsl:text>\newfontfamily\greekfont[Script=Greek]{CMU Serif}&#xa;</xsl:text>
          </xsl:when>
          <xsl:when test="$language = 'ko-KR'">
            <xsl:text>%% Font for Hangul&#xa;</xsl:text>
            <xsl:text>%% Font families: alternate - UnBatang with [Script=Hangul]&#xa;</xsl:text>
            <xsl:text>%% Debian/Ubuntu "fonts-nanum" package&#xa;</xsl:text>
            <xsl:text>\newfontfamily\koreanfont{NanumMyeongjo}&#xa;</xsl:text>
          </xsl:when>
          <xsl:when test="$language = 'ru-RU'">
            <xsl:text>%% Font for Cyrillic&#xa;</xsl:text>
            <xsl:text>%% Font families: CMU Serif, Linux Libertine O&#xa;</xsl:text>
            <xsl:text>%% OTF Script needs to be enabled&#xa;</xsl:text>
            <xsl:text>\newfontfamily\russianfont[Script=Cyrillic]{CMU Serif}&#xa;</xsl:text>
          </xsl:when>
        </xsl:choose>
      </xsl:if>
    </xsl:for-each>
    <xsl:text>%% end:   font setup and configuration for use with xelatex&#xa;</xsl:text>
    <xsl:text>}{%&#xa;</xsl:text>
    <xsl:text>%% begin: font setup and configuration for use with pdflatex&#xa;</xsl:text>
    <xsl:text>%% begin: pdflatex main font ("font-pdflatex-main" template)&#xa;</xsl:text>
    <xsl:call-template name="font-pdflatex-main"/>
    <xsl:text>%% end:   pdflatex main font ("font-pdflatex-main" template)&#xa;</xsl:text>
    <xsl:text>%% begin: pdflatex mono font ("font-pdflatex-mono" template)&#xa;</xsl:text>
    <xsl:text>%% (conditional on non-trivial uses being present in source)&#xa;</xsl:text>
    <xsl:call-template name="font-pdflatex-mono"/>
    <xsl:text>%% end:   pdflatex mono font ("font-pdflatex-mono" template)&#xa;</xsl:text>
    <xsl:text>%% begin: pdflatex font adjustments ("font-pdflatex-style" template)&#xa;</xsl:text>
    <xsl:call-template name="font-pdflatex-style"/>
    <xsl:text>%% end:   pdflatex font adjustments ("font-pdflatex-style" template)&#xa;</xsl:text>
    <xsl:text>%% end:   font setup and configuration for use with pdflatex&#xa;</xsl:text>
    <xsl:text>}&#xa;</xsl:text>
    <xsl:text>%% Micromanage spacing, etc.  The named "microtype-options"&#xa;</xsl:text>
    <xsl:text>%% template may be employed to fine-tune package behavior&#xa;</xsl:text>
    <xsl:text>\usepackage</xsl:text>
    <xsl:call-template name="microtype-option-argument"/>
    <xsl:text>{microtype}&#xa;</xsl:text>
  </xsl:template>
</xsl:stylesheet>
