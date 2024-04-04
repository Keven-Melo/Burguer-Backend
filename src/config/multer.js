import multer from 'multer';
import { v4 } from 'uuid';
import { extname, join } from 'path'; // Removido 'dirname' daqui

// Defina o caminho do diretório de upload diretamente
const uploadDir = join(process.cwd(), 'uploads');

export default {
  storage: multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
      cb(null, v4() + extname(file.originalname));
    },
  }),
};
