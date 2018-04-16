export function ClassSelector(width: any) {
    switch (width) {
        case 'full':
          return 'col-md-12';
        case 'half':
          return 'col-md-6';
        case 'one-third':
          return 'col-md-4';
        case 'one-fourth':
          return 'col-md-3';
        default:
          break;
      }
}
