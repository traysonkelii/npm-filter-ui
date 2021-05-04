import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'

export const PackageRow = ({ name, description, link }) => {

    const handleClick = () => {
        window.open(link, "_blank")
    }

    return (
        <div style={{ marginTop: '12px' }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {description}
                    </Typography>
                    <CardActions>
                        <Button size="small" onClick={handleClick}>View Page</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )
}
