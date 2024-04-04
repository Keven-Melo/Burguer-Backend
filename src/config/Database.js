const configDatabase = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'codeburguer',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}

export default configDatabase
