# Styling options

- Inline styles
- Styled components
    ```jsx
    const StyledButton = styled.button`
        color: blue;
    `;
    ```
- Importing css files and ensuring unique class names (*BEM*)
    ```jsx
    import "./ButtonStyles.css"
    ```
  - this will add the CSS to the header, as is in the file.

- CSS modules
  - build time transformation
  - supported by CRA by default
  - right webpack plugins will tweak the class names
