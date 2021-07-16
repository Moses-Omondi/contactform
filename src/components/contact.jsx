import React from 'react'

import { Card, Container, CardContent, TextField, Grid, Button } from '@material-ui/core';

const contact = () => {
    return (
        <div>
            <Container maxWidth='md'>
                <Card>
                    <CardContent>
                        <form>
                        <Grid container spacing={1}>
                            <Grid sm={6} xs={12} item>
                                <TextField 
                                    variant='outlined' 
                                    label='First Name' 
                                    placeholder='First Name'
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid sm={6} xs={12} item>
                                <TextField 
                                    variant='outlined' 
                                    label='Last Name' 
                                    placeholder='Last Name'
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField 
                                    variant='outlined'
                                    label='Email'
                                    placeholder='Email address'
                                    type='email'
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField 
                                    variant='outlined'
                                    label='Phone'
                                    placeholder='phone'
                                    type='text'
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField 
                                    variant='outlined'
                                    label='Message'
                                    placeholder='Type your message here'
                                    type='text'
                                    multiline rows={4}
                                    fullWidth
                                    required
                                />
                            </Grid>    
                            <Grid xs={12} item>
                                <Button variant='contained' color='primary' fullWidth>Submit</Button>
                            </Grid>
                        </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default contact
