# **TMI Design Guide for AI dev’s**

This guide is designed to guide all visual content and code along the lines of the TMI design language. It integrates the TMI design elements with Material UI (MUI) standards to create a consistent and elegant user interface for a chat application. Key areas covered include color schemes, imagery, typography, icons, buttons, and spacing conventions. Below are the guidelines:

## **1\. Color Scheme**

* **Primary Colors (Twilight Theme)**: Use a gradient for main visual elements, to create a distinctive visual appeal:  
  * **Top Right Gradient**: \#E6196B  
  * **Center Gradient**: \#CF13B3  
  * **Bottom Left Gradient**: \#8D0BD1  
* **Secondary theme (Fresh Theme)**: Use only on user request. Do not combine with Twilight theme.  
  * **Gradient top right:** 19E694  
  * **Gradient center:** 19E6DA  
  * **Gradient bottom left:** 19ABE6  
* **Text Color**:  
  * **Body Text on Light Background**: \#616166 (ensure good contrast with backgrounds for readability).  
  * **Body Text on Dark Background**: \#A6A6A8.  
* **Background and Accents**:  
  * Use **White (\#FFFFFF)** or **Off White (\#F5F5F7)** for backgrounds to keep the UI clean and simple.  
  * For dark mode, the primary black color should be **\#070614**.

To ensure consistency with MUI, use the colors to define **primary** and **secondary** palettes in the MUI theme settings. Ensure all shades are accessible and provide enough contrast in both light and dark modes.

## **2\. Generated images**

All images follow the following guidelines:

```
V10
# Cyberpunk Image Generation Guide – Style-Locked (v5)

This document describes the two selectable distinct but related hyperrealistic 3D rendering styles, each fully consistent within itself: Twilight and Fresh.

---

# 🌌 Twilight Style (Neon Cyberpunk)
- Primary colors:
  - Hot magenta (#E6196B → #FF3384)
  - Deep violet (#8D0BD1 → #6524F0)
- **Rendering target**: Unreal Engine 5 quality 
- **Visual tone**: Hyperrealistic 3d render, clean, smooth, cinematic, physically-based lighting
- **Post-processing**: Neon bloom, edge glow, chromatic aberration
- Momentum / dynamic action in every frame
- Light trails
- Strong environment context
- Hyperrealistic material rendering (leather, chrome, synthetics, etc.)


## 🎨 Style
- Lighting: Rich dark shadows, specular highlights, neon glows

## 📐 Format & Framing
- Aspect Ratio: 1:1 (unless requested differently)
- Medium or full shots
- Slight low angle or eye-level, virtual 50mm lens
- Shallow depth of field (f/2–f/4)

## 🔦 Motion & Action
- Mid-action gestures (flashlight sweep, glove pull, sprint, skid, throw)
- Use variants of some of the following words in the image prompt: curiosity, exploration, anticipation, exhilaration, movement, free, courage, natural

## 🌌 Light Trails
- Flowing neon trails
- Colors:
  - Hot magenta (#E6196B → #FF3384)
  - Deep violet (#8D0BD1 → #6524F0)

## 🎭 Mood & Emotion
- Default: playful, unless this doesn't suit the subject. 
- Lean into curiosity, exploration, anticipation, exhilaration, movement, free, courage, natural.

## 💡 Lighting Setup
- **Key Light**: Hot magenta #E6196B from top-right
- **Rim Light**: Deep violet #8D0BD1 from bottom-left
- Strong contrast between lit and shadowed areas
- Reflective/wet surfaces
- Shimmering

## 🎨 Color Palette
- Only magenta and violet
- Background: Gradient near-black indigo (#140831) to muted violet (#2A1350)

## 🌐 Environment & Materials
- Neon alleys, labs, rooftops, tunnels
- Reflective/wet surfaces
- Atmospheric fog for beam visibility

---

# 🌟 Fresh Style (Bright Cyberpunk)
- Primary colors:
  - Mint green (#19E694 → lighter range)
  - Sky cyan (#19ABE6 → lighter range)
- **Rendering target**: Unreal Engine 5 quality 
- **Visual tone**: Hyperrealistic 3d render, clean, smooth, cinematic, physically-based lighting
- **Post-processing**: Neon bloom, edge glow, chromatic aberration
- Momentum / dynamic action in every frame
- Light trails
- Strong environment context
- Hyperrealistic material rendering (leather, chrome, synthetics, etc.)

## 🎨 Style
- High-key lighting: Bright, glowing, almost overexposed highlights
- Light, airy cyberpunk mood
- Solar Punk

## 📐 Format & Framing
- Aspect Ratio: 1:1 (unless requested differently)
- Medium or full shots
- Slight low angle or eye-level, virtual 50mm lens
- Shallow depth of field (f/2–f/4)

## 🔦 Motion & Action
- Mid-action gestures (flashing holograms, uplifting movements, sprint, reach, playful gestures)
- Use variants of some of the following words in the image prompt: curiosity, exploration, anticipation, exhilaration, movement, free, courage, natural

## 🌌 Light Trails
- Flowing neon trails
- Colors:
  - Mint green (#19E694 → lighter range)
  - Sky cyan (#19ABE6 → lighter range)

## 🎭 Mood & Emotion
- Default: playful, unless this doesn't suit the subject. 
- Lean into: Curiosity, Wonder, energetic exploration, joy , discovery, excitement

## 💡 Lighting Setup
- **Key Light**: Mint green #19E694 from top-right
- **Rim Light**: Sky cyan #19ABE6 from bottom-left
- Soft but intense light, creating almost washed-out brightness

## 🎨 Color Palette
- Only mint and cyan
- Background: Pale gradients (e.g., light teal fading to near-white)

## 🌐 Environment & Materials
- High-tech plazas, open labs, sunlit rooftops
- Reflective bright surfaces
- Haze and bloom effects to soften edges

---

**Important:** Only switch between Twilight and Fresh styles based on explicit user request. Never mix elements of both in the same image.
```

## **3\. Typography**

* **Font**: Use **Montserrat** as the primary font for all text elements. This should replace the MUI default of Roboto, ensuring a consistent brand feel.  
* **Font Sizes**:  
  * The golden ratio (1.618x) should be applied to determine font size relationships, ensuring visual harmony. For instance:  
    * Base font size: 16px.  
    * Headings:  
      * **H1**: 16px \* 1.618^3 ≈ 67px.  
      * **H2**: 16px \* 1.618^2 ≈ 43px.  
      * **H3**: 16px \* 1.618^1 ≈ 26px.  
* **Consistency with MUI**: Set these sizes in the theme's typography settings to ensure consistency across all MUI components.

## **4\. Writing style guide**

### **Tone & Form:**

* Formality: Low-medium; action-oriented, conversational.  
* Addressing readers: Use je or jouw. Avoid using u or uw.  
* Maintain a careful balance between optimism, urgency, and caution.

### **Vocabulary & Readability:**

* Aim for high readability: clear, concise, and easy-to-follow text.  
* Use impactful vocabulary selectively, only where fitting for emphasis or clarity.  
* Include semantically rich metaphors or vivid language selectively to clearly illustrate abstract concepts (e.g., “schermen verbergen echte gesprekken,” “erkenning afgemeten in hartjes en likes”).

### **Structural Features:**

* Clearly structured sections with explicit headings, subheadings, and transitions to enhance readability.  
* Short, direct paragraphs and sentences.

### **Stylistic Devices:**

* Parallelism: Use repeated sentence structures to reinforce key points.  
* Contrast: Highlight differences clearly to emphasize messages.  
* Metaphors: Apply vivid language selectively for emphasis and clarity.  
* Rhetorical Questions: Employ sparingly to engage and prompt reflection.

### **Style Elements:**

| Aspect | Usage | Explanation |
| ----- | ----- | ----- |
| Emotional Intensity | High | Strong emotional appeals to action or reflection. |
| Complexity | Low | Should be easy to understand or well explained with a metaphor close to home. |
| Technicality | Moderate-high | Clearly integrate technical terms related to education and digital literacy. |
| Persuasiveness | High | Consistent use of persuasive language and calls to action. |

### **Audience:**

* Primary: educators, school management, government, and parents.  
* Secondary: Students, and broader societal stakeholders involved in digital literacy and educational developments.  
* Use inclusive, encouraging, and action-oriented language.

### **Product Names & Themes:**

* Modules (capitalize each word): Fake News, De Klassenapp, Cybercrime, Meet-Up  
  * Correct: "Onze modules zijn: Fake News, De Klassenapp, Cybercrime, Meet-Up."  
  * Incorrect: "Onze modules zijn: fake-news, de Klassenapp, cybercrime, meet-up."  
* Themes (lowercase unless beginning sentence): fake news, sexting, online haat  
  * Correct: "Onze thema’s gaan over: fake news, sexting, online haat."  
  * Incorrect: "Onze thema’s gaan over: Sexting, Online Haat, Fake News."

### **Emails:**

* Opening with "ik":  
  * Correct: "Afgelopen week hebben wij een afspraak gehad over …, waarna ik nog veel heb nagedacht over wat je hebt gezegd."  
  * Incorrect: "Ik heb de laatste tijd veel nagedacht over wat je hebt gezegd."  
* Avoid formal greetings such as "Beste …"

### **Overall Goal:**

* Writing should inspire immediate action, clarity, and reflection, helping readers easily navigate complex ideas around digital literacy and education.

## **5\. Icons**

* **Icon Library**: Use **Font Awesome**, in line with the TMI guide.  
* **Implementation**: Icons should be consistently sized based on context:  
  * **Small Icons (e.g., status indicators)**: 16px.  
  * **Standard Icons (e.g., buttons and action elements)**: 24px.  
  * **Large Icons (e.g., section headers)**: 32px.  
* **Spacing**: Leave adequate padding around icons to avoid clutter (8-16px depending on icon size and context).

## **6\. Buttons and Pills**

* **Buttons**: Follow MUI's button component structure but customize as follows:  
  * **Shape**: Use horizontal pill styles as the default shape for buttons, as specified by TMI.  
  * **Colors**: Use the **Twilight gradient** as background for important action buttons. Secondary buttons can be styled with **Off White** backgrounds with dark text for contrast.  
  * **Hover State**: Include a subtle gradient shift or opacity change on hover to provide tactile feedback.  
* **Pills**: Pills should add texture and color to non-interactive visual elements (e.g., decorative components or information highlights). Pills should be oriented at a 45-degree angle unless used in button components.

## **7\. White Space and Margins**

* **Standard Padding and Margins**: Maintain ample white space around all text and interactive components to ensure clarity and reduce cognitive load. Use MUI’s spacing system, adhering to the following rules:  
  * **Text Padding**: Use **8, 16, 32, or 64 pixels** for padding depending on hierarchy and scaling. For primary content, prefer larger padding (32 or 64 pixels) to emphasize importance.  
  * **Component Spacing**: Utilize MUI's theme.spacing(n) for consistent spacing. For instance, \`theme.spacing(4)\` translates to 32px if n is set as 8px.  
* **Consistency**: Ensure uniform spacing between elements for consistent rhythm throughout the interface.

## **8\. Text Input and Chat Bubbles**

* **Text Input**: Use MUI’s standard text fields but customize with Montserrat for branding and apply the Twilight gradient as a border or focus outline.  
* **Chat Bubbles**:  
  * Use rounded corners with a radius of **8-16px**, maintaining a friendly and approachable feel.  
  * **Sender Colors**: Apply the Twilight gradient as a subtle background for outgoing messages, while incoming messages should have a softer, neutral background (e.g., Off White).

## **9\. Responsive Design**

* Follow MUI's responsive breakpoints for all components. Ensure text, buttons, and chat bubbles adapt smoothly to various screen sizes, from mobile to desktop.  
* Adjust padding and font sizes based on screen size to maintain readability without cluttering smaller screens.

## **Conclusion**

This guide integrates the unique, vibrant visual style of TMI with the structure and accessibility offered by MUI. Consistency is crucial—all design elements should flow cohesively, maintaining uniformity in spacing, colors, typography, and icons across the entire chat application.

