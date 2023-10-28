import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Character } from 'rickmortyapi'

const Thumnail = ({ characterData }: { characterData: Character[] }) => {
    return (
        <section className='bg-green-400 m-4 flex overflow-auto rounded-md box-border'>
          {characterData?.length === 0 && <p className='errorMsg'>No character data available.</p>}
          {characterData?.length > 0 && (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-screen gap-2 items-center box-border pt-3 mb-3'>
                  {characterData.map((character: Character) => (
                      <Card key={character.id} className='hover:scale-75' sx={{ justifyContent: 'center', maxWidth: 180, minHeight: 225, maxHeight: 225, margin: 'auto' }}>
                          <CardMedia
                      sx={{ margin: 1, maxHeight: 200, scale: 1, maxWidth: 140, borderRadius: '5%' }}
                      component="img"
                      image={character.image}
                      alt={character.name}
                  />
                  <CardContent sx={{ padding: 1 }}>
                      <Typography gutterBottom component="div" sx={{ marginBottom: 0, padding: 0 }}>
                          {character.name}
                      </Typography>
                      <div className='flex gap-1'>
                          <Typography variant="body2" color="text.secondary">
                              {character.species} / {character.origin.name}
                          </Typography>
                      </div>
                  </CardContent>
              </Card>
          ))}
              </div>
          )}
      </section>
  )
}

export default Thumnail
