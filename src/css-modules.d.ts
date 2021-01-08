declare module "*.css" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.png" {
  const styles: string;
  export default styles;
}
