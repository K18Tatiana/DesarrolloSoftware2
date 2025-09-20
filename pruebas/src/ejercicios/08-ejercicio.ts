interface Libro {
    titulo: string;
    autor?: { nombre?: string; pais?: string };
    anioPublicacion?: number;
}

function mostrarLibro(libro: Libro) {
    console.log(`Título: ${libro.titulo}, Nombre del autor: ${libro.autor?.nombre ?? 'Autor desconocido'}, País del autor: ${libro.autor?.pais ?? 'País desconocido'}, Año de publicación: ${libro.anioPublicacion ?? 'Año no disponible'}`);
}

const libro1: Libro = {
    titulo: 'El principito',
    autor: { nombre: 'Antoine de Saint-Exupéry', pais: 'Francia' },
    anioPublicacion: 1943
}
const libro2: Libro = {
    titulo: '1984',
    anioPublicacion: 1949
}
const libro3: Libro = {
    titulo: 'Cien años de soledad',
    autor: { nombre: 'Gabriel García Márquez', pais: 'Colombia' },
}

mostrarLibro(libro1);
mostrarLibro(libro2);
mostrarLibro(libro3);