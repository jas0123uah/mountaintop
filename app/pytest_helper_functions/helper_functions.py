import json
def demo_login(client):
    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
    
    }
    newLogin = {'email':"demo@aa.io", 'password':'password'}
    return client.post('/api/auth/login', data=json.dumps(newLogin), headers=headers)
