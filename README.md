# Shir Editor

A beautiful, feature-rich RTL-friendly rich text editor component for React applications with Persian/Arabic language support.

<img width="1895" height="907" alt="image" src="https://github.com/user-attachments/assets/fb3af12f-50b3-485f-9391-b9ca86a32291" />

## 🏷️ Keywords

`react` `typescript` `rtl` `persian` `arabic` `hebrew` `rich-text-editor` `wysiwyg` `text-editor` `tailwind-css` `contenteditable` `right-to-left` `farsi` `markdown` `toolbar` `formatting` `radix-ui` `accessibility` `responsive` `dark-mode` `i18n` `internationalization` `component-library` `npm-package` `vite` `rollup`

## ✨ Features

- 🔄 **RTL Support** - Built-in right-to-left text direction support for Persian, Arabic, and Hebrew
- 🎨 **Rich Text Editing** - Complete WYSIWYG editing experience
- 🎯 **Smart Navigation** - Ctrl+click to open links in new tabs
- 📋 **Enhanced Paste** - Intelligent text pasting with proper formatting
- 🎛️ **Comprehensive Toolbar** - Full-featured toolbar with all formatting options
- 💎 **TypeScript Support** - Fully typed for better development experience
- 🎨 **Tailwind CSS** - Styled with Tailwind CSS for easy customization
- 🌙 **Dark Mode Ready** - Compatible with dark/light theme switching
- 📱 **Responsive Design** - Works perfectly on all screen sizes
- 🎯 **Persian UI** - User interface in Persian language

### Rich Text Features

- **Text Formatting**: Bold, Italic
- **Text Alignment**: Right, Center, Left, Justify
- **Headings**: H1, H2, H3 with proper styling
- **Links**: Create and remove hyperlinks
- **Colors**: Text color customization (Red, Green, Blue, Yellow, Black/White)
- **Blockquotes**: Create quote blocks with copy functionality
- **Horizontal Rules**: Insert separator lines
- **Smart Enter**: Automatic paragraph creation and blockquote exit

## 📦 Installation

```bash
npm install shireditor
```

```bash
yarn add shireditor
```

```bash
pnpm add shireditor
```

## 🚀 Quick Start

```tsx
import React, { useState } from "react";
import CustomEditor from "shireditor";

function App() {
  const [content, setContent] = useState("<p>سلام دنیا!</p>");

  return (
    <div className="container mx-auto p-4">
      <h1>My RTL Editor</h1>
      <CustomEditor
        value={content}
        onChange={(newContent) => setContent(newContent)}
        className="min-h-[400px]"
      />
    </div>
  );
}

export default App;
```

## 📖 API Reference

### CustomEditor Props

| Prop        | Type                      | Required | Description                                   |
| ----------- | ------------------------- | -------- | --------------------------------------------- |
| `value`     | `string`                  | Yes      | The HTML content of the editor                |
| `onChange`  | `(value: string) => void` | Yes      | Callback function called when content changes |
| `className` | `string`                  | No       | Additional CSS classes for styling            |

### Usage Examples

#### Basic Usage

```tsx
<CustomEditor
  value={htmlContent}
  onChange={(newValue) => setHtmlContent(newValue)}
/>
```

#### With Custom Styling

```tsx
<CustomEditor
  value={htmlContent}
  onChange={(newValue) => setHtmlContent(newValue)}
  className="border-2 border-blue-500 rounded-lg shadow-lg min-h-[500px]"
/>
```

#### Controlled Component with Validation

```tsx
const [content, setContent] = useState("");
const [isValid, setIsValid] = useState(true);

const handleChange = (newContent: string) => {
  setContent(newContent);
  setIsValid(newContent.length > 10); // Minimum content validation
};

<CustomEditor
  value={content}
  onChange={handleChange}
  className={`${isValid ? "border-green-500" : "border-red-500"}`}
/>;
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd ShirEditor

# Install dependencies
npm install

# Build the library
npm run build
```

### Project Structure

```
src/
├── components/
│   ├── editor.tsx          # Main editor component
│   ├── toolbar.tsx         # Formatting toolbar
│   ├── provider.tsx        # Context provider
│   ├── index.tsx          # Main export component
│   └── ui/                # UI primitives
├── utils/
│   ├── to-html.ts         # HTML conversion utilities
│   └── to-json.ts         # JSON conversion utilities
├── lib/
│   └── utils.ts           # Utility functions
└── index.ts               # Main entry point
```

## 🎨 Customization

### Styling with Tailwind CSS

The editor uses Tailwind CSS classes and can be easily customized:

```tsx
<CustomEditor
  value={content}
  onChange={setContent}
  className="
    border-2 
    border-purple-300 
    rounded-xl 
    shadow-xl 
    min-h-[600px] 
    bg-gradient-to-br 
    from-purple-50 
    to-pink-50
  "
/>
```

### Custom Toolbar Styling

The toolbar components support theme customization and will automatically adapt to your application's design system.

## 🔧 Technical Details

### Dependencies

- **React 18+** - Core framework
- **Radix UI** - Accessible UI primitives
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **TypeScript** - Type safety

### Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### RTL Implementation

The editor implements proper RTL support through:

- `dir="rtl"` attribute on the container
- CSS `direction: rtl` styling
- Right-aligned default text alignment
- RTL-aware keyboard navigation

## 📝 Examples

### Persian Content Example

```tsx
const persianContent = `
  <h1>عنوان اصلی</h1>
  <p>این یک <strong>متن نمونه</strong> به زبان <em>فارسی</em> است.</p>
  <blockquote>این یک نقل قول است که با قابلیت کپی ارائه می‌شود.</blockquote>
  <p>برای اطلاعات بیشتر به <a href="https://example.com">این لینک</a> مراجعه کنید.</p>
`;

<CustomEditor value={persianContent} onChange={setContent} />;
```

### Mixed Content Example

```tsx
const mixedContent = `
  <h2>Mixed RTL/LTR Content</h2>
  <p>This editor supports both English and <span style="color: #3b82f6;">عربی/فارسی</span> text seamlessly.</p>
  <hr />
  <p style="text-align: center;">Centered text works perfectly in both directions.</p>
`;
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the ISC License.

## 🔗 Links

- [GitHub Repository](https://github.com/your-username/ShirEditor)
- [NPM Package](https://www.npmjs.com/package/shireditor)
- [Documentation](https://your-docs-url.com)

## 💡 Tips

- Use Ctrl+Click on links to open them in new tabs
- Press Enter in blockquotes to exit and create a new paragraph
- The editor automatically handles RTL text direction
- All toolbar tooltips are in Persian for better RTL user experience
- Content is saved as HTML and can be easily serialized/deserialized
